package main

import (
	"api"
	"config"
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"os"
)

var (
	config_path string
)

func init() {
	flag.StringVar(&config_path, "config", "config/config.json", "path to json config")
}

func main() {
	flag.Parse()

	config := config.NewConfig()

	file, err := os.ReadFile(config_path)
	if err != nil {
		log.Fatal(err)
	}
	err = json.Unmarshal(file, config)
	if err != nil {
		log.Fatal(err)
	}
	server := api.New(config)
	if err = server.Start(); err != nil {
		log.Fatal(err)
	}
	fmt.Println("Server started!")
}
