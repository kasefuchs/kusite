package app

import (
	"github.com/kasefuchs/kusite/internal/pkg/database"
	"github.com/kasefuchs/kusite/internal/pkg/server"
	"github.com/kasefuchs/kusite/internal/pkg/server/middleware/static"
)

// Config specifies application configuration.
type Config struct {
	Server   *server.Config   `hcl:"server,block"`   // Server specifies server configuration.
	Static   []*static.Config `hcl:"static,block"`   // Static specifies web frontend configuration.
	Database *database.Config `hcl:"database,block"` // Database specifies database connection configuration.
}
