<template>
  <div class="flex h-screen flex-col items-center justify-center p-6">
    <div class="w-full max-w-md space-y-4">
      <div class="text-center mb-8">
        <div class="flex justify-center mb-4">
          <img src="/tauri-icon.png" alt="Tauri" class="w-16 h-16" />
        </div>
        <h1 class="text-2xl font-bold">Tauri Nuxt Template</h1>
        <div class="flex flex-wrap justify-center gap-2 mt-3">
        <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Tauri 2</span>
        <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Nuxt 4</span>
        <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">shadcn-vue</span>
        <span class="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Tailwind CSS 4</span>
      </div>
      </div>

      <div class="flex gap-2">
        <Input
          v-model="message"
          placeholder="Enter your name..."
          @keyup.enter="greet"
        />
        <Button @click="greet" :disabled="loading">
          <span v-if="!loading">Go</span>
          <svg v-else class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg>
        </Button>
      </div>

      <div :class="['p-4 rounded-lg text-center font-mono text-sm min-h-[60px] flex items-center justify-center', response && 'bg-muted']">
        {{ response }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { invoke } from '@tauri-apps/api/core'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const message = ref('')
const response = ref('')
const loading = ref(false)

async function greet() {
  if (!message.value.trim()) return

  loading.value = true
  try {
    const result = await invoke<string>('greet', { name: message.value })
    response.value = result
  } catch (error) {
    response.value = `Error: ${error}`
  } finally {
    loading.value = false
  }
}
</script>
