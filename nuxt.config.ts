// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  telemetry: false,
  devServer: {
    port: 1420
  },
  vite: {
    clearScreen: false,
    // Expose environment variables with these prefixes to client code
    // Additional environment variables can be found at
    // https://v2.tauri.app/reference/environment-variables/
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      // Tauri expects a consistent port
      strictPort: true,
    },
  },
  // Prevent "too many open files" error by excluding Rust backend from file watching
  ignore: ['**/src-tauri/**'],
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in
     * @default "./app/components/ui"
     */
    componentDir: './app/components/ui'
  }
})