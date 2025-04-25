package web

import (
	"io/fs"
	"net/http"
	"os"

	"github.com/gofiber/fiber/v2"
	filesystemMiddleware "github.com/gofiber/fiber/v2/middleware/filesystem"
)

// Controller represents a web controller.
type Controller struct {
	// Web configuration.
	config *Config

	// The file system containing the root of the builded frontend.
	filesystem fs.FS
}

// Use activates the controller.
func (controller *Controller) Use(app *fiber.App) error {
	if controller.config.Enabled {
		app.Use(
			filesystemMiddleware.New(filesystemMiddleware.Config{
				Root: http.FS(controller.filesystem),
			}),
		)
	}

	return nil
}

// NewController creates a new instance of the web Controller.
func NewController(config *Config) *Controller {
	fsys := &fallbackFileSystem{
		fileSystem:   os.DirFS(config.Directory),
		fallbackPath: "index.html",
	}

	return &Controller{config, fsys}
}
