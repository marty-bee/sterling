import { describe, it, expect } from 'vitest'
import { appRouter } from './router'

describe('tRPC router', () => {
  it('should exist', () => {
    expect(appRouter).toBeDefined()
  })
})
