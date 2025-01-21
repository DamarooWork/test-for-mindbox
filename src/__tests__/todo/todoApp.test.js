import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import Todo from '../../components/todo/TodoApp'

// import App from '../../App'

describe('true is truthy and false is falsy', () => {
  it('true is truthy', () => {
    expect(true).toBe(true)
  })

  it('false is falsy', () => {
    expect(false).toBe(false)
  })
})
// // test('demo', () => {
// //     expect(true).toBe(true)
// // })

// // test("Renders the main page", () => {
// //     render(<App />)
// //     expect(true).toBeTruthy()
// // })
// // test('loads and displays', () => {
// //   render(<Todo />)
// //   // ACT
// //   const header = screen.getByText(/todos/i)
// //   // await userEvent.click(screen.getByText('Load Greeting'))
// //   // await screen.findByRole('heading')

// //   // ASSERT
// //   expect(header).toBeInTheDocument()
// //   // expect(screen.getByRole('heading')).toHaveTextContent('hello there')
// //   // expect(screen.getByRole('button')).toBeDisabled()
// // })
