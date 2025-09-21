import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

const isRunningOnGitHubActions = !!process.env.GITHUB_ACTIONS

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [
        { browser: 'chromium',
          headless: isRunningOnGitHubActions
        },
      ],
    }
  }
})