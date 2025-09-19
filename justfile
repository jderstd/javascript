set shell := ["bash", "-cu"]
set windows-shell := ["powershell"]

node_bin := "./node_modules/.bin/"
tsc := node_bin + "tsc"
biome := node_bin + "biome"
tsdown := node_bin + "tsdown"
vitest := node_bin + "vitest"
typedoc := node_bin + "typedoc"

pkg := "package"

tst := "test"

# Default action
_:
    just lint
    just fmt
    just build
    just test

# Install
i:
    pnpm install

# Setup the project
setup:
    brew install ls-lint typos-cli
    just i

# Lint code
lint:
    ls-lint
    typos
    cd ./{{pkg}} && ../{{tsc}} --noEmit

# Format code
fmt:
    ./{{biome}} check --write .

# Build package
build:
    cd ./{{pkg}} && ../{{tsdown}} -c tsdown.config.ts

# Run tests
test:
    cd ./{{tst}} && ./{{vitest}} run

# Run tests with different runtimes
test-all:
    cd ./{{tst}} && pnpm run test
    cd ./{{tst}} && deno run test
    cd ./{{tst}} && bun run test

# Generate APIs documentation
api:
    cd ./{{pkg}} && ../{{typedoc}}

# Publish package with dev tag as dry-run
publish-dev-try:
    cd ./{{pkg}} && pnpm publish --no-git-checks --tag dev --dry-run

# Publish package with dev tag
publish-dev:
    cd ./{{pkg}} && pnpm publish --no-git-checks --tag dev

# Publish package as dry-run
publish-try:
    cd ./{{pkg}} && pnpm publish --dry-run

# Publish package
publish:
    cd ./{{pkg}} && pnpm publish

# Clean builds
clean:
    rm -rf ./package/dist

# Clean everything
clean-all:
    rm -rf ./node_modules
    rm -rf ./{{pkg}}/node_modules
    rm -rf ./{{tst}}/node_modules
    just clean
