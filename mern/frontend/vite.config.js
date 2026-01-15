import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  test: {
    include: ["src/**/*.{test,spec}.?(c|m)js?(x)"],

    exclude: [
      "node_modules/**",
      "cypress/**",
      "**/*.cy.js",
      "**/*.spec.cy.js",
      "**/cypress/**",
      "**/cypress/**/*.js"
    ],

    globals: true,
    environment: "jsdom",

    coverage: {
      provider: "v8",
      reporter: ["text", "html"]
    }
  }
})
