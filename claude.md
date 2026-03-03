# Project Preferences

## Code Style

- Use `type` instead of `interface` for TypeScript type definitions
- Use PascalCase for component names and type/interface names

- Do not write comments explaining what the code is going to do
- Use arrow functions
- Inline values unless they're used more than once

## Usage of TypeScript

node 24 runs typescript files without modification or needing any CLI arguments.

# Inspecting TypeScript types

You can't trust your reasoning to tell you what a TypeScript type is – you need to use tsserver to inspect the types directly, e.g. `echo '{"seq":1,"type":"request","command":"open","arguments":{"file":"myfile.ts"}}
{"seq":2,"type":"request","command":"quickinfo","arguments":{"file":"myfile.ts","line":5,"offset":10}}' | npx tsserver`

