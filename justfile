set shell := ["bash", "-cu"]
set windows-shell := ["pwsh", "-Command"]

tsc := "pnpm exec tsc"
biome := "pnpm exec biome"
tsdown := "pnpm exec tsdown"
vitest := "pnpm exec vitest"
typedoc := "pnpm exec typedoc"
publish := "pnpm publish"

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

# Lint code
lint:
    ls-lint -config .ls-lint.yaml
    typos
    cd ./{{pkg}} && {{tsc}} --noEmit

# Lint code with Biome
lint-biome:
    {{biome}} lint .

# Format code
fmt:
    {{biome}} check --write .

# Build package
build:
    cd ./{{pkg}} && {{tsdown}} -c tsdown.config.ts

# Run tests
test:
    cd ./{{tst}} && {{vitest}} run

# Generate APIs documentation
api:
    cd ./{{pkg}} && {{typedoc}}

# Publish package with dev tag as dry-run
publish-dev-try:
    cd ./{{pkg}} && {{publish}} --no-git-checks --tag dev --dry-run

# Publish package with dev tag
publish-dev:
    cd ./{{pkg}} && {{publish}} --no-git-checks --tag dev

# Publish package as dry-run
publish-try:
    cd ./{{pkg}} && {{publish}} --dry-run

# Publish package
publish:
    cd ./{{pkg}} && {{publish}}

# Clean builds
clean:
    rm -rf ./package/dist

# Clean everything
clean-all:
    just clean

    rm -rf ./{{tst}}/node_modules

    rm -rf ./{{pkg}}/node_modules

    rm -rf ./node_modules
