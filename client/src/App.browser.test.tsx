import { describe, it, expect } from 'vitest'
import {render} from  'vitest-browser-react'        
import App from './App'
import { trpc } from './trpc'

describe('App component', () => {
  it('renders the h1 with "Vite + React"', () => {
    const { container } = render(<App trpc={trpc} />)
    const heading = container.querySelector('h1')
    expect(heading?.textContent).toBe('Vite + React')
  })
})
