package app

import (
	"github.com/kasefuchs/kusite/internal/pkg/database"
	"github.com/kasefuchs/kusite/internal/pkg/server"
	"github.com/kasefuchs/kusite/internal/pkg/server/middleware/static"
)

type App struct {
	config *Config

	staticMiddlewares []*static.Middleware
}

func (a *App) Start() error {
	if err := database.Open(a.config.Database); err != nil {
		return err
	}

	if err := database.Migrate(); err != nil {
		return err
	}

	for _, smw := range a.staticMiddlewares {
		if err := smw.Use(server.App); err != nil {
			return err
		}
	}

	return server.Open(a.config.Server)
}

func NewApp(cfg *Config) *App {
	var staticMiddlewares []*static.Middleware
	for _, scfg := range cfg.Static {
		smw := static.NewMiddleware(scfg)
		staticMiddlewares = append(staticMiddlewares, smw)
	}

	return &App{cfg, staticMiddlewares}
}
