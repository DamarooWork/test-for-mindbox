import { useEffect, useState } from 'react'
import Filters from './ToDoFilters'

export default function ToDoFooter({
  tasks,
  filterTodos,
  deleteTodoHandler,
}: {
  tasks: ITodo[]
  filterTodos: (filter: Filter) => void
  deleteTodoHandler: () => void
}) {
  const [notDoneTodos, setNotDoneTodos] = useState<number>(0)
  useEffect(() => {
    setNotDoneTodos(0)
    tasks.forEach((task) => {
      if (!task.completed) {
        setNotDoneTodos((prev) => ++prev)
      }
    })
  }, [tasks])
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

      <Filters filterTodos={filterTodos} />
      <button onClick={() => deleteTodoHandler()}>Clear completed</button>
    </footer>
  )
}
