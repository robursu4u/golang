package main

import ()

type User_struct struct {
	Name string `json: "name"`
	Age  string `json: "age"`
	Race string `json: "race"`
	Id   int    `json: "id"`
}

type User_struct_slice []User_struct
