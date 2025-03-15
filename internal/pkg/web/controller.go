package web

import (
	"net/http"
	"os"

	"github.com/gofiber/fiber/v2"
	filesystemMiddleware "github.com/gofiber/fiber/v2/middleware/filesystem"
)

// Controller represents a web controller.
type Controller struct {
	// Web configuration.
	config *Config
}

// Use activates the controller.
func (controller *Controller) Use(app *fiber.App) error {
	fsys := os.DirFS(controller.config.Directory)

	app.Use(
		filesystemMiddleware.New(filesystemMiddleware.Config{
			Root: http.FS(&fallbackFileSystem{
				fileSystem:   fsys,
				fallbackPath: "index.html",
			}),
		}),
	)

	return nil
}

// NewController creates a new instance of the web Controller.
func NewController(config *Config) *Controller {
	return &Controller{config}
}
