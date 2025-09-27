# pnpm-mono-template

### a starting point for a monorepo with typescript and pnpm workspaces

- pnpm workspaces for monorepo setup
- typescript: uses `@tsconfig/strictest` + `@tsconfig/node22` as defaults
- eslint: uses `strictTypeChecked` + `stylisticTypeChecked` as defaults
- prettier: out of the box configuration

each has a root level config, with per-package configs that extend the root for when more specificity is required per package

uses two packages for scaffolding:

- `packages/core`: core logic/utilities for other packages to consume
- `packages/ui`: sample consumer of core package

usage:

1. copy the template

   a. just fork the repo

   b. use [degit](https://github.com/Rich-Harris/degit), `pnpm dlx degit https://github.com/jackbisceglia/pnpm-mono-template`

2. then update all instances of `pnpm-mono-template` with the new project name
3. install deps

some scripts added to `package.json` that i find useful

- `pnpm lint` to lint all packages
- `pnpm format` to run format all packages
- `pnpm typecheck` to run tsc --noEmit on all packages and see type check output
- `pnpm @core run <some script the package defines>` to run package-level scripts at root
  - this is an alias for `pnpm -F @<repo>/core run <script>`
  - eg. `pnpm @core run lint` to just lint the core package (alias for `pnpm -F @<repo>/core run lint`)
