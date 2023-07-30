mkdir build
go build -o build cmd/main.go
export GOOS=windows
go build -o build cmd/main.go
