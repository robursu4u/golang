package main

import (
	"flag"
	//"github.com/gorilla/mux"
	//"io/ioutil"
	"log"
	"net/http"
)

func main() {
	port := flag.Int("port", 8080, "port running main.go server")

	//Not recognizing routes.go file...
	router := NewRouter()

	//Console log and port to run on
	log.Printf("Running on server %d", *port)
	log.Fatal(http.ListenAndServe(":8080", router))

}
