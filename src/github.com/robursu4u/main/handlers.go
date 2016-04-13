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
	//Serves html page "public/gulag.html" in this instance
	//http.ServeFile(res, req, "public/gulag.html")
}

func Robot(res http.ResponseWriter, req *http.Request) {
	//http.ServeFile(res, req, "public/robot.html")
	robot := User_struct_slice{
		User_struct{Name: "My name is Bob"},
		User_struct{Name: "Rule the world"},
	}

	json.NewEncoder(res).Encode(robot)
}

func Robot_login(res http.ResponseWriter, req *http.Request) {

}
