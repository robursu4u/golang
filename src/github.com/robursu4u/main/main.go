package main

import (
	"flag"
	"fmt"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"gorilla/mux"
	"html/template"
	"log"
	"net/http"
)

func main() {
	port := flag.Int("port", 8080, "port running main.go server")

	//for gorilla mux
	r := mux.NewRouter()

	//Serve login.html to home page, look up how to change "login.html" to
	// "login" or something so it's not just login.html in address bar
	r.Handle("/", http.RedirectHandler("/login.html", 302))

	r.HandleFunc("/create_user", User_create).Methods("POST")
	r.HandleFunc("/login_user", User_login).Methods("GET")

	//Serves static files
	http.Handle("/", r)
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./static/")))

	//Console log and port to run on
	log.Printf("Running on server %d", *port)
	log.Fatal(http.ListenAndServe(":8080", r))

}

type User_struct struct {
	//Id         string `json: "id" bson:"_id,omitempty"`
	Username   string `bson: "username"`
	Password   string `bson: "password"`
	First_Name string `bson: "first_name"`
	Last_Name  string `bson: "last_name"`
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
		http.Redirect(res, req, "/welcome.html", 302)
		fmt.Println(req.FormValue("username"))
	}

}

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

	} else {

		var query_password map[string]interface{}
		//Find values that belong to username, select password that belongs to username, ".One" returns a bson map for password along with hex _id string
		c.Find(bson.M{"username": req.FormValue("username")}).Select(bson.M{"password": req.FormValue("username")}).One(&query_password)

		//Pull password string from bson map "bson.M{}"
		query_password_string := query_password["password"]

		//The text that use entered in password field
		entered_password := req.FormValue("password")

		//Compare
		if query_password_string != entered_password {
			http.Redirect(res, req, "/", 302)
			//fmt.Println(substring_result)
			fmt.Println("Password you entered for this username does not match. Try again.")

		} else {
			http.Redirect(res, req, "/welcome.html", 302)
			fmt.Println("You have logged in.")
		}
	}
}
