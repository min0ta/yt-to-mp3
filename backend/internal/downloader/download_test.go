package downloader

import (
	"config"
	"encoding/json"
	"fmt"
	"testing"
)

func TestLoader(t *testing.T) {
	config := config.NewConfig()
	downloader := New(config)

	res, err := downloader.Ping("https://www.youtube.com/watch?v=IQ1D48imY1s")
	if err != nil {
		t.Fail()
	}
	troll, err := json.Marshal(fmt.Sprintf(`{"res":"%.2f"}`, res.Duration.Minutes()))
	if err != nil {
		t.Fail()
	}
	fmt.Printf(`minutes: %.2f, stringified: %s`, res.Duration.Minutes(), troll)
	troll, err = json.Marshal(fmt.Sprintf(`{"res":"%b"}`, res.Duration.Abs().Seconds()))
	fmt.Printf(`seconds: %b, stringified: %s`, res.Duration.Abs().Seconds(), troll)

	if err != nil {
		fmt.Println(err)
		t.Fail()
	}
}

func TestXxx(t *testing.T) {
	config := config.NewConfig()
	downloader := New(config)
	_, err := downloader.FastMP3("https://www.youtube.com/watch?v=UPvEVwAX_Nk")
	if err != nil {
		t.Fatal(err)
	}
}
