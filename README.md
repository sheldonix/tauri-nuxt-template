<div align="center">

# Nuxt Shadcn Template

**A modern starter template built with Nuxt 4, shadcn-vue, and Tailwind CSS 4**

[![Nuxt](https://img.shields.io/badge/Nuxt-4.2.2-00DC82?logo=nuxt.js)](https://nuxt.com)
[![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org)
[![shadcn-vue](https://img.shields.io/badge/shadcn--vue-2.4-000000?logo=shadcnui)](https://www.shadcn-vue.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

</div>

## Overview

This template provides a solid foundation for building modern web applications with **Nuxt 4**, **shadcn-vue**, and **Tailwind CSS 4**.

## Features

- **Nuxt 4** - The latest Vue 3 full-stack framework with auto-imports, file-based routing, and server-side rendering
- **shadcn-vue** - Beautifully designed components built on Radix UI primitives
- **Tailwind CSS 4** - Utility-first CSS with the latest v4 features
- **Theme Switcher** - Dark/light theme toggle with localStorage persistence

## Quick Start

### Use as Template

Click the "Use this template" button on GitHub to create your own repository, or run:

```bash
# Clone the repository
git clone https://github.com/sheldonix/nuxt-shadcn-template.git my-project
cd my-project

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## Adding Components

This template includes Button, Card, and Input components by default. Add more shadcn-vue components:

```bash
pnpm dlx shadcn-vue@latest add [component-name]
```

Available components: [shadcn-vue.com/docs/components](https://www.shadcn-vue.com/docs/components)

## Folder Structure

```
.
├── app/
│   ├── assets/       # Global styles and Tailwind CSS config
│   ├── components/   # Vue components
│   ├── lib/          # Utility functions
│   ├── layouts/      # Nuxt layouts
│   ├── pages/        # Route pages
│   └── plugins/      # Nuxt plugins
└── public/           # Static assets
```

## Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm generate     # Generate static site
pnpm preview      # Preview production build
```

## Links

- [Nuxt](https://nuxt.com)
- [shadcn-vue](https://www.shadcn-vue.com)
- [Tailwind CSS](https://tailwindcss.com)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

[MIT](./LICENSE) - feel free to use this template for your own projects.
