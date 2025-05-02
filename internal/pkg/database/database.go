package database

import (
	"errors"

	"gorm.io/driver/postgres"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// DB stores database connection.
var DB *gorm.DB

// newDialector returns dialector for specified configuration.
func newDialector(config *Config) (gorm.Dialector, error) {
	switch config.Type {
	case "postgres":
		return postgres.Open(config.DSN), nil
	case "sqlite":
		return sqlite.Open(config.DSN), nil
	default:
		return nil, errors.New("unsupported database type")
	}
}

// Open opens the database connection.
func Open(config *Config) error {
	dial, err := newDialector(config)
	if err != nil {
		return err
	}

	DB, err = gorm.Open(dial, &gorm.Config{})
	return err
}

// Close closes the database connection.
func Close() error {
	sqlDB, err := DB.DB()
	if err != nil {
		return err
	}

	return sqlDB.Close()
}

// Migrate runs auto migration.
func Migrate() error {
	return DB.AutoMigrate()
}
