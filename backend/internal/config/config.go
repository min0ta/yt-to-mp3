package config

type Config struct {
	PORT                 string  `json:"port"`
	MAX_VIDEO_DURATION_S float64 `json:"maxVideoDurationSeconds"`
	ID_GENERATOR_SYMBOLS string  `json:"idGenerationSymbols"`
	ID_LENGTH            int     `json:"idLength"`
	CORS_ALLOWED         string  `json:"allowedCors"`
}

func NewConfig() *Config {
	return &Config{
		PORT:                 ":3000",
		MAX_VIDEO_DURATION_S: 500,
		ID_GENERATOR_SYMBOLS: "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKKLZXCVBNM1234567890-",
		ID_LENGTH:            15,
		CORS_ALLOWED:         "http://localhost:5173",
	}
}
