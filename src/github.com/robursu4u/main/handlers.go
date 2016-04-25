package main

import (
	"encoding/json"
	"fmt"
	//"log"
	"net/http"
)

//Functions for serving static files
func Public(res http.ResponseWriter, req *http.Request) {
	fmt.Fprintln(res, "Welcome!")

}

func Robot(res http.ResponseWriter, req *http.Request) {
	robot := User_struct_slice{
		User_struct{Name: "My name is Bob"},
		User_struct{Name: "Rule the world"},
	}

	//Since we know we are using json, we should specify we are. Otherwise, the net/http server
	// would have guessed content type, which can fail at times.
	res.Header().Set("Content-Type", "application/json; charset=UTF-8")
	//Setting status code
	res.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(res).Encode(robot); err != nil {
		panic(err)
	}

}

func Robot_login(res http.ResponseWriter, req *http.Request) {

}
