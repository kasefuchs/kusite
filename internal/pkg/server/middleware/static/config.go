package static

// Config specifies web frontend configuration.
type Config struct {
	Prefix    string `hcl:"prefix"`    // The prefix on which web application static files will be served.
	Directory string `hcl:"directory"` // Directory where web application static files located.
}
