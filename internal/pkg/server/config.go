package server

// Config specifies server configuration.
type Config struct {
	Address string `hcl:"address"` // Address specifies address to use.
	Port    uint16 `hcl:"port"`    // Port specifies port to use.
}
