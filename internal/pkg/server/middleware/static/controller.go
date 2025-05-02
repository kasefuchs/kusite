package static

import (
	"io/fs"
	"net/http"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/filesystem"
)

// Middleware represents a static middleware.
type Middleware struct {
	// Static configuration.
	config *Config

	// The file system containing the root of the builded frontend.
	filesystem fs.FS
}

// Use activates the middleware.
func (middleware *Middleware) Use(app *fiber.App) error {
	app.Use(
		middleware.config.Prefix,
		filesystem.New(filesystem.Config{
			Root: http.FS(middleware.filesystem),
		}),
	)

	return nil
}

// NewMiddleware creates a new instance of the static middleware.
func NewMiddleware(cfg *Config) *Middleware {
	fsys := &fallbackFileSystem{
		fileSystem:   os.DirFS(cfg.Directory),
		fallbackPath: "index.html",
	}

	return &Middleware{cfg, fsys}
}
