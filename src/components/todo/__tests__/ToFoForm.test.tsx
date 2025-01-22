import { screen, render } from '@testing-library/react'
import TodoApp from '../ToDoApp'
import { userEvent } from '@testing-library/user-event'

describe('Form tests', () => {
  test('Add new todo', async () => {
    render(<TodoApp />)
    const formInput: HTMLInputElement = screen.getByPlaceholderText(
      /What needs to be done/i
    )
    userEvent.click(formInput)
    await userEvent.type(formInput, 'Помыть посуду')
    expect(formInput.value).toBe('Помыть посуду')
    await userEvent.keyboard('{Enter}') 
    expect(formInput.value).toBe('')
    const newTodoWash = screen.getAllByText(/Помыть посуду/i)
    expect(newTodoWash).toBeInTheDocument
  })
})
