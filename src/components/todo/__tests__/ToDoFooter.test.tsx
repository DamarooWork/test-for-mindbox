import { screen, render } from '@testing-library/react'
import TodoApp from '../ToDoApp'
import { userEvent } from '@testing-library/user-event'
describe('Footer tests', () => {
  test('Clear comleted todos', () => {
    render(<TodoApp />)
    const btnClearComleted = screen.getAllByText(/clear/i)
    userEvent.click(btnClearComleted[0])
    const baseListElement = screen.getByText(/Прекрасный код/i)
    expect(baseListElement).not.toBe
  })
  test('Clear comleted todos and check todos left', () => {
    render(<TodoApp />)
    const btnClearComleted = screen.getAllByText(/clear/i)
    userEvent.click(btnClearComleted[0])
    const baseListElement = screen.getByText(/left/i)
    expect(baseListElement).toHaveTextContent('2 items left')
  })
  test('Check first todo, delete comleted todos (2) and check todos left (1)', async () => {
    render(<TodoApp />)
    const checkboxArray: HTMLInputElement[] = screen.getAllByTestId('checkbox')
    expect(checkboxArray.length).toEqual(3)
    await userEvent.click(checkboxArray[0])
    expect(checkboxArray[0].checked).toEqual(true)
    const btnClearComleted = screen.getByText(/clear/i)
    await userEvent.click(btnClearComleted)
    const itemsLeftText = screen.getByText(/left/i)
    expect(itemsLeftText).toHaveTextContent('1 item left')
  })
})
