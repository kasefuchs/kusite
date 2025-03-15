package app

import (
	"github.com/kasefuchs/kusite/internal/pkg/server"
	"github.com/kasefuchs/kusite/internal/pkg/web"
)

// Config specifies application configuration.
type Config struct {
	Server *server.Config `hcl:"server,block"` // Server specifies server configuration.
	Web    *web.Config    `hcl:"web,block"`    // Web specifies web frontend configuration.
}
