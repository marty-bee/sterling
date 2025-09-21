import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

const isOnCI = !!process.env.CI

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [
        { browser: 'chromium',
          headless: isOnCI
        },
      ],
    }
  }
})