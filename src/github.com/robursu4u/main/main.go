package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"gorilla/mux"
	"gorilla/sessions"
	"log"
	"net/http"
	uuid "satori/go.uuid" //may remove if github.com/gorilla/sessions is good
)

func main() {
	port := flag.Int("port", 80, "port running main.go server")

	//for gorilla mux
	r := mux.NewRouter()

	//Serves function and any
	r.HandleFunc("/create_user", User_create).Methods("POST")
	r.HandleFunc("/login_user", User_login).Methods("GET")
	r.HandleFunc("/session-name", User_session).Methods("GET")

	//Serves this over browser as url resource. Then retrieve into html with angular's http get.
	//Uses Handle instead of HandleFunc because we need to return something,
	//Handle requires it to be wrapped in "handler"
	r.Handle("/golang_get_url", handler(Test_user_info)).Methods("GET")

	//Serves static files
	http.Handle("/", r)

	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./static/")))

	//Console log and port to run on
	log.Printf("Running on server %d", *port)
	log.Fatal(http.ListenAndServe(":8080", r))

}

//For user sessions.
var store = sessions.NewCookieStore([]byte("something-very-secret"))

//User info struct
type User_struct struct {
	Username   string `json: "username"`
	Password   string `json: "password"`
	First_Name string `json: "first_name"`
	Last_Name  string `json: "last_name"`
}

//Error struct
type handlerError struct {
	Error   error
	Message string
	Code    int
}

//Test user info struct
type Test_struct struct {
	Name       string `json: "username"`
	First_Name string `json: "first_name"`
	Last_Name  string `json: "last_name"`
}

//Test info
func Test_user_info(res http.ResponseWriter, req *http.Request) (interface{}, *handlerError) {

	golang_get_url := Test_struct{"Hmmmm that's interesting...", "Robert", "Ursu"}
	return golang_get_url, nil
}

//New session
func User_session(res http.ResponseWriter, req *http.Request) {

	session, err := store.Get(req, "session-name")
	if err != nil {
		http.Error(res, err.Error(), http.StatusInternalServerError)
		return
	}

	session.Values["test_user_info"] = "ya gonna go far kid"
	session.Values[45] = 45

	session.Save(req, res)
	return

}

// a custom type that we can use for handling errors and formatting responses
type handler func(w http.ResponseWriter, r *http.Request) (interface{}, *handlerError)

// attach the standard ServeHTTP method to our handler so the http library can call it
//"Handle" func requires ServeHTTP method
func (fn handler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	// here we could do some prep work before calling the handler if we wanted to

	// call the actual handler
	response, err := fn(w, r)

	// check for errors
	if err != nil {
		log.Printf("ERROR: %v\n", err.Error)
		http.Error(w, fmt.Sprintf(`{"error":"%s"}`, err.Message), err.Code)
		return
	}
	if response == nil {
		log.Printf("ERROR: response from method is nil\n")
		http.Error(w, "Internal server error. Check the logs.", http.StatusInternalServerError)
		return
	}

	// turn the response into json
	bytes, e := json.Marshal(response)
	if e != nil {
		http.Error(w, "Error marshalling json", http.StatusInternalServerError)
		return
	}

	// send the response and log
	w.Header().Set("Content-Type", "application/json")
	w.Write(bytes)
	log.Printf("%s %s %s %d", r.RemoteAddr, r.Method, r.URL, 200)
}

//POST for setting up profile on site
func User_create(res http.ResponseWriter, req *http.Request) {

	//Connect to mongodb
	session, err := mgo.Dial("mongodb://localhost:27017")
	if err != nil {
		panic(err)
	}
	defer session.Close()
	session.SetMode(mgo.Monotonic, true)

	//Choosing what db and collection during mgo session
	c := session.DB("mad").C("user")

	//mgo index for err below
	//"Ensuring" index is kept proper by verifying mgo.Index("username") doesn't already exist in collection
	index := mgo.Index{
		Key:        []string{"username"},
		Unique:     true,
		DropDups:   true,
		Background: true,
		Sparse:     true,
	}
	err = c.EnsureIndex(index)
	if err != nil {
		panic(err)
	}

	err = c.Insert(&User_struct{
		Username:   req.FormValue("username"),
		Password:   req.FormValue("password"),
		First_Name: req.FormValue("first_name"),
		Last_Name:  req.FormValue("last_name"),
	})
	if mgo.IsDup(err) {
		fmt.Println("username in use, please choose another username.")
		http.Redirect(res, req, "/", 302)

	} else {
		http.Redirect(res, req, "/", 302)
		fmt.Println(req.FormValue("username"))
	}

}

//Login for user. Tie to golang_get_url and return user data to angular.

func User_login(res http.ResponseWriter, req *http.Request) {

	//Connect to mongodb
	session, err := mgo.Dial("mongodb://localhost:27017")
	if err != nil {
		panic(err)
	}
	defer session.Close()
	session.SetMode(mgo.Monotonic, true)

	c := session.DB("mad").C("user")

	var result interface{}

	err = c.Find(bson.M{"username": req.FormValue("username")}).One(&result)
	if err != nil {
		http.Redirect(res, req, "/", 302)
		fmt.Println("Username not found in db. Try again.")
		return
	} else {

		var query_password map[string]interface{}
		//Find values that belong to username, select password that belongs to username, ".One" returns a json map for password along with hex _id string
		c.Find(bson.M{"username": req.FormValue("username")}).Select(bson.M{"password": req.FormValue("username")}).One(&query_password)

		//Pull password string from json map "bson.M{}"
		query_password_string := query_password["password"]

		//The text that use entered in password field
		entered_password := req.FormValue("password")

		//Compare
		if query_password_string != entered_password {
			http.Redirect(res, req, "/", 302)
			fmt.Println("Password you entered for this username does not match. Try again.")
			return
		} else {
			//Get ajax to work with submit button, or page resets, thus angular won't be able to retreive data.
			http.Redirect(res, req, "/", 302)
			fmt.Println("You have logged in.")
			return
		}
	}
}

//Original session with Joey. Only for cookies though. Use sessions instead.
//Sessions are more secure and can retreive server side info.
func Get_user_info(res http.ResponseWriter, req *http.Request) {

	cookie, err := req.Cookie("authuuid")
	if err != nil {
		res.WriteHeader(http.StatusBadRequest)
		return
	}

	parsed_cookie, err := uuid.FromString(cookie.Value)
	if err != nil {
		res.WriteHeader(http.StatusInternalServerError)
		return
	}

	//Connect to mongodb
	session, err := mgo.Dial("mongodb://localhost:27017")
	if err != nil {
		panic(err)
	}
	defer session.Close()
	session.SetMode(mgo.Monotonic, true)

	var result interface{}

	c := session.DB("mad").C("user")
	err = c.Find(bson.M{"authuuid": parsed_cookie}).One(&result)
	if err != nil {
		fmt.Println("UUID authentication is successful")
		/////////////////// HEEEEEERRRRRRRRRRRRRREEEEEEEEEEEEEEEEEEE
		//golang_get_url := User_struct{"Hmmmm that's interesting...", "Robert", "Ursu"}
		//return golang_get_url, nil

	} else {
		fmt.Println("UUID failure")
		return
	}
}
