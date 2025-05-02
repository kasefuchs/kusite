package database

// Config specifies database connection configuration.
type Config struct {
	Type string `hcl:"type,label"` // Type specifies database type.
	DSN  string `hcl:"dsn"`        // DSN specifies database connection info.
}
