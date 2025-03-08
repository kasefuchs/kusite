package main

import (
	"fmt"
	"os"

	"github.com/hashicorp/hcl/v2/hclsimple"
	"github.com/kasefuchs/website/internal/app"
	"github.com/kasefuchs/website/internal/pkg/server"
	"github.com/urfave/cli/v2"
)

func main() {
	ca := &cli.App{
		Name:  "website",
		Usage: "My personal website",
		Commands: []*cli.Command{
			{
				Name:  "server",
				Usage: "Starts a website server",
				Flags: []cli.Flag{
					&cli.StringFlag{
						Name:  "config",
						Value: "config.hcl",
						Usage: "path to a configuration file",
					},
				},
				Action: func(ctx *cli.Context) error {
					var cfg app.Config
					if err := hclsimple.DecodeFile(ctx.String("config"), nil, &cfg); err != nil {
						return err
					}

					return server.Open(cfg.Server)
				},
			},
		},
	}

	if err := ca.Run(os.Args); err != nil {
		fmt.Println(err)
	}
}
