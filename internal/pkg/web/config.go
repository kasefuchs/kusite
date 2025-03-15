package web

// Config specifies web frontend configuration.
type Config struct {
	Directory string `hcl:"directory"` // Directory where web application static files located.
}
