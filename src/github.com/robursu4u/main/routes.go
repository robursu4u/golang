package main

import (
	"github.com/gorilla/mux"
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

func NewRouter() *mux.Router {

	router := mux.NewRouter().StrictSlash(true)
	for _, route := range routes {
		var handler http.Handler

		handler = route.HandlerFunc
		handler = Logger(handler, route.Name)

		router.
			Methods(route.Method).
			Path(route.Pattern).
			Name(route.Name).
			Handler(handler)
	}

	return router
}

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
