package web

import "io/fs"

type fallbackFileSystem struct {
	fileSystem   fs.FS
	fallbackPath string
}

func (f *fallbackFileSystem) Open(name string) (fs.File, error) {
	open, err := f.fileSystem.Open(name)
	if err != nil {
		open, err = f.fileSystem.Open(f.fallbackPath)
	}
	return open, err
}
