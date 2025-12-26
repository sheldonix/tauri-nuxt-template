<div align="center">

# Tauri Nuxt Template

**A modern cross-platform desktop application starter template built with Tauri 2, Nuxt 4, shadcn-vue, and Tailwind CSS 4**

[![Tauri](https://img.shields.io/badge/Tauri-2.9-FFC131?logo=tauri&logoColor=000000)](https://tauri.app)
[![Nuxt](https://img.shields.io/badge/Nuxt-4.2.2-00DC82?logo=nuxt.js)](https://nuxt.com)
[![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org)
[![shadcn-vue](https://img.shields.io/badge/shadcn--vue-2.4-000000?logo=shadcnui)](https://www.shadcn-vue.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

</div>

## Overview

This template provides a solid foundation for building modern cross-platform desktop applications with **Tauri 2**, **Nuxt 4**, **shadcn-vue**, and **Tailwind CSS 4**.

## Features

- **Rust** - Fast, memory-safe, and type-safe systems programming language
- **Tauri 2** - Build tiny, fast binaries for all major desktop platforms
- **Nuxt 4** - The latest Vue 3 framework with auto-imports and file-based routing
- **shadcn-vue** - Beautifully designed components built on Reka UI primitives
- **Tailwind CSS 4** - Utility-first CSS with the latest v4 features
- **Theme Switcher** - Dark/light theme toggle with localStorage persistence

## Getting Started

### Prerequisites

- **Node.js** 18+ and **pnpm**
- **Rust** (latest stable)

### Create Project

Click the **"Use this template"** button on GitHub to create your own repository, or clone it manually:

```bash
git clone https://github.com/sheldonix/tauri-nuxt-template.git my-project
cd my-project

# Install dependencies
pnpm install

# Start development
pnpm tauri dev
```

## Building

```bash
pnpm generate     # Build static site to ./dist
pnpm tauri build  # Build desktop app for current platform
```

The built application will be in `src-tauri/target/release/bundle/`.

## Adding UI Components

This template includes Button, Card, Input, Dialog, and Label components by default. Add more shadcn-vue components:

```bash
pnpm dlx shadcn-vue@latest add [component-name]
```

Available components: [shadcn-vue.com/docs/components](https://www.shadcn-vue.com/docs/components)

## Tauri Commands

Tauri commands are defined in `src-tauri/src/lib.rs` and can be called from the frontend:

```rust
// Rust backend (src-tauri/src/lib.rs)
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}
```

```typescript
// Vue frontend
import { invoke } from '@tauri-apps/api/core'

const result = await invoke<string>('greet', { name: 'World' })
```

Learn more: [Calling Rust from the Frontend](https://v2.tauri.app/develop/calling-rust/)

## Folder Structure

```
.
├── app/                 # Nuxt application directory
│   ├── assets/          # Global styles and Tailwind CSS config
│   ├── components/      # Vue components
│   ├── lib/             # Utility functions
│   ├── layouts/         # Nuxt layouts
│   └── pages/           # Route pages
├── src-tauri/           # Tauri Rust backend
├── icons/               # Application icons
└── public/              # Static assets
```

## Links

- [Rust](https://www.rust-lang.org)
- [Tauri](https://tauri.app)
- [Nuxt](https://nuxt.com)
- [shadcn-vue](https://www.shadcn-vue.com)
- [Tailwind CSS](https://tailwindcss.com)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

[![GitHub](https://img.shields.io/badge/Github-sheldonix%2Ftauri--nuxt--template-181717?logo=github)](https://github.com/sheldonix/tauri-nuxt-template)

## License

[MIT](./LICENSE) - feel free to use this template for your own projects.
