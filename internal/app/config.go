package app

import "github.com/kasefuchs/kusite/internal/pkg/server"

// Config specifies application configuration.
type Config struct {
	Server *server.Config `hcl:"server,block"` // Server specifies server configuration.
}
