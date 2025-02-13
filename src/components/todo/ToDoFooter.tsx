import { useEffect, useState } from 'react'
import Filters from './ToDoFilters'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export default function ToDoFooter({
  filterTodosHandler,
  deleteTodoHandler,
}: {
  filterTodosHandler: (filter: Filter) => void
  deleteTodoHandler: () => void
}) {
  const [notDoneTodos, setNotDoneTodos] = useState<number>(0)
  const todos = useSelector((state: RootState) => state.todos)
  useEffect(() => {
    setNotDoneTodos(0)
    todos.forEach((task) => {
      if (!task.completed) {
        setNotDoneTodos((prev) => ++prev)
      }
    })
  }, [todos])
  return (
    <footer
      className="flex flex-col sm:flex-row gap-4 
    sm:gap-0 justify-between items-center px-4 py-4 text-xs"
    >
      {notDoneTodos === 0 ? (
        <h2>All done!</h2>
      ) : notDoneTodos === 1 ? (
        <h2>{notDoneTodos} item left</h2>
      ) : (
        <h2>{notDoneTodos} items left</h2>
      )}

      <Filters filterTodosHandler={filterTodosHandler} />
      <button onClick={() => deleteTodoHandler()}>Clear completed</button>
    </footer>
  )
}
