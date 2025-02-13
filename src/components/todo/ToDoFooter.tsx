import { useEffect, useState } from 'react'
import Filters from './ToDoFilters'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export default function ToDoFooter({
  filterTodosHandler,
  deleteDoneTodosHandler,
}: {
  filterTodosHandler: (filter: Filter) => void
  deleteDoneTodosHandler: () => void
}) {
  const [notDoneTodos, setNotDoneTodos] = useState<number>(0)
  const todos = useSelector((state: RootState) => state.todos)
  useEffect(() => {
    setNotDoneTodos(0)
    todos.forEach((todo) => {
      if (!todo.completed) {
        setNotDoneTodos((prev) => ++prev)
      }
    })
  }, [todos])
  return (
    <footer
      className="flex flex-col items-center justify-between gap-4 px-4 py-4 text-xs sm:flex-row sm:gap-0"
    >
      {notDoneTodos === 0 ? (
        <h2>All done!</h2>
      ) : notDoneTodos === 1 ? (
        <h2>{notDoneTodos} item left</h2>
      ) : (
        <h2>{notDoneTodos} items left</h2>
      )}

      <Filters filterTodosHandler={filterTodosHandler} />
      <button onClick={() => deleteDoneTodosHandler()}>Clear completed</button>
    </footer>
  )
}
