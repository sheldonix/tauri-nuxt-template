<template>
  <div class="min-h-screen bg-background flex flex-col">
    <!-- Header -->
    <header class="border-b">
      <div class="container mx-auto max-w-6xl px-6 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold">Nuxt + shadcn-vue</h1>
          <div class="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm">Documentation</Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t">
      <div class="container mx-auto max-w-6xl px-6 py-6 text-center text-sm text-muted-foreground">
        Built with Nuxt and shadcn-vue
      </div>
    </footer>
  </div>
</template>
