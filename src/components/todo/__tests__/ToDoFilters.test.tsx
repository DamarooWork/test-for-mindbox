import { screen, render } from '@testing-library/react'
import TodoApp from '../ToDoApp'
import { userEvent } from '@testing-library/user-event'
describe('Filters tests', () => {
  test('filter: btn active rendered', () => {
    render(<TodoApp />)
    const btnActiveFilter = screen.getAllByText('Active')
    expect(btnActiveFilter).toBe
  })
  test('filter: click active  and check active list elem', () => {
    render(<TodoApp />)
    const btnActiveFilter = screen.getAllByText(/active/i)
    userEvent.click(btnActiveFilter[0])
    const baseListElement = screen.getByText(/Тестовое задание/i)
    expect(baseListElement).toBe
  })
  test('filter: click active  and check comleted list elem', () => {
    render(<TodoApp />)
    const btnActiveFilter = screen.getAllByText(/active/i)
    userEvent.click(btnActiveFilter[0])
    const baseListElement = screen.getByText(/Прекрасный код/i)
    expect(baseListElement).not.toBe
  })
})
