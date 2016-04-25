package main

import (
	"net/http"
)

//Router structure
type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

type Routes []Route

var routes = Routes{
	Route{
		//Function name established in handlers.go file
		"Public",
		//This is request to "get" info from server or wherever
		"GET",
		//link with web address. "localhost:8080/" in this case
		"/",
		Public,
	},
	Route{
		"Robot",
		"GET",
		"/robot",
		Robot,
	},
}
