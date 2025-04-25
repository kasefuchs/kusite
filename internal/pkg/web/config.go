package web

// Config specifies web frontend configuration.
type Config struct {
	Enabled   bool   `hcl:"enabled"`   // This enables the serving of the web frontend.
	Directory string `hcl:"directory"` // Directory where web application static files located.
}
