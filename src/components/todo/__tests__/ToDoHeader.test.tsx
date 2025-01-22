import { screen, render } from '@testing-library/react'
import TodoApp from '../ToDoApp'

describe('Header tests', () => {
  test('should render the header', () => {
    render(<TodoApp />)
    expect(screen.getByTestId('header')).toBe
  })
  test('should render the todosH1', () => {
    render(<TodoApp />)
    const todosH1 = screen.getByText(/todos/i)
    expect(todosH1).toBe
  })
})
