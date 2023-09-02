package downloader

import (
	"config"
	"fmt"
	"io"
	"os"

	"github.com/kkdai/youtube/v2"
)

type Downloader struct {
	config *config.Config
	client *youtube.Client
}

func New(config *config.Config) *Downloader {
	return &Downloader{
		config: config,
		client: &youtube.Client{},
	}
}

func (d *Downloader) Validate(vid *youtube.Video) (string, error) {
	duration := vid.Duration.Seconds()
	if duration > d.config.MAX_VIDEO_DURATION_S {
		return "", fmt.Errorf("video is too long! get %.2f s, 500s maximum", duration)
	}
	return vid.ID, nil
}

func (d *Downloader) GetSubtitile(url string) (youtube.VideoTranscript, error) {
	vid, err := d.client.GetVideo(url)
	if err != nil {
		return nil, err
	}
	_, err = d.Validate(vid)
	if err != nil {
		return nil, err
	}
	res, err := d.client.GetTranscript(vid)
	if err != nil {
		return nil, err
	}
	return res, nil
}

func (d *Downloader) Ping(url string) (*youtube.Video, error) {
	vid, err := d.client.GetVideo(url)
	if err != nil {
		return nil, err
	}
	duration := vid.Duration.Seconds()
	if duration > d.config.MAX_VIDEO_DURATION_S {
		return nil, fmt.Errorf("video is too long! get %.2f s, 500s maximum", duration)
	}
	return vid, nil
}

// ExampleDownload : Example code for how to use this package for download video.
func (d *Downloader) GetMP4(url string) (io.ReadCloser, int64, error) {
	video, err := d.client.GetVideo(url)
	if err != nil {
		return nil, 0, err
	}
	_, err = d.Validate(video)

	if err != nil {
		return nil, 0, err
	}

	formats := video.Formats.WithAudioChannels() // only get videos with audio
	stream, len, err := d.client.GetStream(video, &formats[0])
	if err != nil {
		return nil, 0, err
	}

	return stream, len, nil
}

func (d *Downloader) GetFastMP3(url string) (io.ReadCloser, int64, error) {
	video, err := d.client.GetVideo(url)
	if err != nil {
		return nil, 0, err
	}
	_, err = d.Validate(video)

	if err != nil {
		return nil, 0, err
	}

	formats := video.Formats.Type("audio/mp4").WithAudioChannels() // only get videos with audio
	stream, len, err := d.client.GetStream(video, &formats[0])
	if err != nil {
		return nil, 0, err
	}

	return stream, len, nil
}

func (d *Downloader) FastMP3(url string) (io.ReadCloser, error) {
	video, err := d.client.GetVideo(url)

	if err != nil {
		return nil, err
	}
	_, err = d.Validate(video)

	if err != nil {
		return nil, err
	}
	formats := video.Formats.Type("audio/mp4").WithAudioChannels()
	stream, _, err := d.client.GetStream(video, &formats[0])
	if err != nil {
		fmt.Println("me me")
		return nil, err
	}
	file, err := os.Create("testing.mp3")
	if err != nil {
		return nil, err
	}
	defer file.Close()
	io.Copy(file, stream)
	return nil, nil
}
