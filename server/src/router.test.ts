import { describe, it, expect } from 'vitest'
import { appRouter } from './router'

describe('tRPC router', () => {
  it('should exist', () => {
    expect(appRouter).toBeDefined()
  })
  it('should have a ping procedure that returns pong', async () => {
    const result = await appRouter.createCaller({}).ping()
    expect(result).toBe('pong')
  })
  it('should have a pong procedure that returns ping', async () => {
    const result = await appRouter.createCaller({}).pong()
    expect(result).toBe('ping')
  })
  it('should return an error for unknown procedure', async () => {
    const caller = appRouter.createCaller({})
    await expect(
      // @ts-expect-error - Testing unknown procedure
      caller.unknownProcedure()
    ).rejects.toThrow()
  })
})
