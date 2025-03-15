package main

import (
	"fmt"
	"os"

	"github.com/kasefuchs/kusite/internal/pkg/web"

	"github.com/hashicorp/hcl/v2/hclsimple"
	"github.com/kasefuchs/kusite/internal/app"
	"github.com/kasefuchs/kusite/internal/pkg/server"
	"github.com/urfave/cli/v2"
)

func main() {
	ca := &cli.App{
		Name:  "kusite",
		Usage: "My personal website",
		Commands: []*cli.Command{
			{
				Name:  "server",
				Usage: "Starts a KuSite server",
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

					if err := web.NewController(cfg.Web).Use(server.App); err != nil {
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
