package api

import (
	"config"
	"downloader"
	"fmt"
	"io"
	"net/http"
	"regexp"
	"strconv"
)

type APIserver struct {
	config     *config.Config
	downloader *downloader.Downloader
}

func New(config *config.Config) *APIserver {
	loader := downloader.New(config)
	return &APIserver{
		config:     config,
		downloader: loader,
	}
}

func (s *APIserver) Start() error {
	s.configureRouter()
	return http.ListenAndServe(s.config.PORT, nil)
}

func (s *APIserver) configureRouter() {
	http.HandleFunc("/video", s.handleVideo())
	http.HandleFunc("/audio", s.handleFastMP3())
	http.HandleFunc("/", s.handleError())
	http.HandleFunc("/ping", s.Ping())
}

func (s *APIserver) handleVideo() http.HandlerFunc {
	regex, _ := regexp.Compile(`^(https:\/\/www\.){0,1}youtube\.com\/watch\?v=[a-zA-Z0-9_-]{11}`)
	allowed := s.config.CORS_ALLOWED
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", allowed)
		if r.Method != "GET" {
			w.WriteHeader(404)
			return
		}
		youtubeUrl := r.URL.Query().Get("url")
		if !regex.Match([]byte(youtubeUrl)) {
			io.WriteString(w, `{"err":"not valid url"}`)
			return
		}

		stream, len, err := s.downloader.GetMP4(youtubeUrl)
		if err != nil {
			w.WriteHeader(400)
			res := fmt.Sprintf(`{"err":"%s"}`, err.Error())
			io.WriteString(w, res)
			return
		}
		w.Header().Add("Content-Length", strconv.FormatInt(len, 10))
		io.Copy(w, stream)
	}
}
func (s *APIserver) handleFastMP3() http.HandlerFunc {
	regex, _ := regexp.Compile(`^(https:\/\/www\.){0,1}youtube\.com\/watch\?v=[a-zA-Z0-9_-]{11}`)
	allowed := s.config.CORS_ALLOWED
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", allowed)
		if r.Method != "GET" {
			w.WriteHeader(404)
			return
		}
		youtubeUrl := r.URL.Query().Get("url")
		if !regex.Match([]byte(youtubeUrl)) {
			io.WriteString(w, `{"err":"not valid url"}`)
			return
		}

		stream, len, err := s.downloader.GetFastMP3(youtubeUrl)
		if err != nil {
			w.WriteHeader(400)
			res := fmt.Sprintf(`{"err":"%s"}`, err.Error())
			io.WriteString(w, res)
			return
		}
		w.Header().Add("Content-Length", strconv.FormatInt(len, 10))
		io.Copy(w, stream)
	}
}

func (s *APIserver) Ping() http.HandlerFunc {
	regex, _ := regexp.Compile(`^(https:\/\/www\.){0,1}youtube\.com\/watch\?v=[a-zA-Z0-9_-]{11}`)
	allowed := s.config.CORS_ALLOWED
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", allowed)
		youtubeUrl := r.URL.Query().Get("url")
		if !regex.Match([]byte(youtubeUrl)) {
			io.WriteString(w, `{"err":"not valid url"}`)
			return
		}
		video, err := s.downloader.Ping(youtubeUrl)
		if err != nil {
			res := fmt.Sprintf(`{"err":"%s"}`, err.Error())
			io.WriteString(w, res)
			return
		}
		res := fmt.Sprintf(`{"title": "%s","duration":"%.2f","author":"%s","thumb":"%s"}`, video.Title, video.Duration.Abs().Minutes(), video.Author, video.Thumbnails[0].URL)
		io.WriteString(w, res)
	}
}
func (s *APIserver) handleError() http.HandlerFunc {
	allowed := s.config.CORS_ALLOWED
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", allowed)
		w.WriteHeader(404)
		io.WriteString(w, `{"err":"not found"}`)
	}
}
