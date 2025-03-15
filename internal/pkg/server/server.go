package server

import (
	"fmt"

	"github.com/goccy/go-json"
	"github.com/gofiber/fiber/v2"
)

// App stores Fiber instance.
var App = fiber.New(
	fiber.Config{
		AppName:     "KuSite",
		JSONEncoder: json.Marshal,
		JSONDecoder: json.Unmarshal,
	},
)

// Open starts the server.
func Open(config *Config) error {
	addr := fmt.Sprintf("%s:%d", config.Address, config.Port)

	return App.Listen(addr)
}

// Close stops the server.
func Close() error {
	return App.Shutdown()
}
