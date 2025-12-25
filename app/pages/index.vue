<template>
  <div class="container mx-auto max-w-5xl px-6 py-16">
    <!-- Hero Section -->
    <section class="text-center mb-20">
      <h2 class="text-5xl font-bold mb-6">
        Beautiful UI Components for Nuxt 4
      </h2>
      <p class="text-muted-foreground text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
        A starter template built with Nuxt 4, shadcn-vue, and Tailwind CSS 4
      </p>
      <div class="flex gap-4 justify-center">
        <Button as-child size="lg">
          <NuxtLink to="https://www.shadcn-vue.com/docs/components" target="_blank">
            Explore Components
          </NuxtLink>
        </Button>
        <Button as-child variant="outline" size="lg">
          <NuxtLink to="https://github.com/sheldonix/nuxt-shadcn-template" target="_blank">
            View on GitHub
          </NuxtLink>
        </Button>
      </div>
    </section>

    <!-- Components Showcase -->
    <section class="mb-20">
      <h3 class="text-3xl font-bold mb-8 text-center">Component Showcase</h3>
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Button Card -->
        <Card>
          <CardHeader>
            <CardTitle>Button</CardTitle>
            <CardDescription>
              Multiple variants and sizes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </CardContent>
          <CardFooter>
            <div class="flex gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardFooter>
        </Card>

        <!-- Input Card -->
        <Card>
          <CardHeader>
            <CardTitle>Input</CardTitle>
            <CardDescription>
              Text input field with styling
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-3">
            <Input type="text" placeholder="Enter your name" />
            <Input type="email" placeholder="email@example.com" />
            <Input type="password" placeholder="Password" />
          </CardContent>
        </Card>

        <!-- Features Card -->
        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
            <CardDescription>
              What's included in this template
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center gap-2">
                <span class="text-primary">✓</span> Nuxt.js 4
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary">✓</span> shadcn-vue components
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary">✓</span> Tailwind CSS 4
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary">✓</span> TypeScript support
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary">✓</span> Dark mode ready
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" class="w-full">
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>

    <!-- Quick Start -->
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
          <CardDescription>
            Add more shadcn-vue components to your project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="bg-muted p-4 rounded-md font-mono text-sm">
            <code class="text-primary">pnpm dlx shadcn-vue@latest add [component]</code>
          </div>
        </CardContent>
      </Card>
    </section>
  </div>
</template>
