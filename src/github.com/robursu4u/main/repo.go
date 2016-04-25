package main

import ()

var currentId int

//var todos Todos
var user User_struct

// Give us some seed data
func init() {
	RepoCreateUser(User_struct{Name: "Bobby"})
	RepoCreateUser(User_struct{Name: "Ursu"})
}

func RepoCreateUser(t User_struct) User_struct {
	currentId += 1
	t.Id = currentId
	return t
}
