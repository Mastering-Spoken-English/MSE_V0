import tailwindcss from '@tailwindcss/vite'
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      targets: [
        'Chrome >= 49',
        'Firefox >= 52', 
        'Safari >= 10',
        'Edge >= 79',
        'ie >= 11'  // Add IE11 support if needed
      ],
      additionalLegacyPolyfills: [
        'regenerator-runtime/runtime',
        'core-js/stable',
        'whatwg-fetch'
      ]
    })
  ],
  build: {
    target: 'es2015', // More compatible target
    cssTarget: 'chrome61' // Better CSS compatibility
  },
  server: {
    historyApiFallback: true
  }
})