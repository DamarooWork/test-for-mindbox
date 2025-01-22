import { screen, render } from '@testing-library/react'
import TodoApp from '../ToDoApp'
import { userEvent } from '@testing-library/user-event'
describe('Footer tests', () => {
  test('Clear comleted elems', () => {
    render(<TodoApp />)
    const btnClearComleted = screen.getAllByText(/clear/i)
    userEvent.click(btnClearComleted[0])
    const baseListElement = screen.getByText(/Прекрасный код/i)
    expect(baseListElement).not.toBe
  })
  test('Clear comleted elems and check items left', () => {
    render(<TodoApp />)
    const btnClearComleted = screen.getAllByText(/clear/i)
    userEvent.click(btnClearComleted[0])
    const baseListElement = screen.getByText(/left/i)
    expect(baseListElement).toHaveTextContent('2 items left')
  })
  test('Check first elem, delete comleted elems and check items left', () => {
    render(<TodoApp />)
    const checkboxArray = screen.getAllByTestId('checkbox')
    expect(checkboxArray[0]).toBeChecked
    userEvent.click(checkboxArray[0])
    const btnClearComleted = screen.getByText(/clear/i)
    userEvent.click(btnClearComleted)
    const baseListElement = screen.getByText(/left/i)
    expect(baseListElement).toHaveTextContent('2 items left')
  })
})
