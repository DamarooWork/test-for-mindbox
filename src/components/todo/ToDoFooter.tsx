import { useEffect, useState } from 'react'
import Filters from './ToDoFilters'

export default function ToDoFooter({
  tasks,
  filterTasks,
  deleteTaskHandler,
}: {
  tasks: ITask[]
  filterTasks: (filter: Filter) => void
  deleteTaskHandler: () => void
}) {
  const [notDoneTasks, setNotDoneTasks] = useState<number>(0)
  useEffect(() => {
    setNotDoneTasks(0)
    tasks.forEach((task) => {
      if (!task.completed) {
        setNotDoneTasks((prev) => ++prev)
      }
    })
  }, [tasks])
  return (
    <footer
      className="flex flex-col sm:flex-row gap-4 
    sm:gap-0 justify-between items-center px-4 py-4 text-xs"
    >
      {notDoneTasks === 0 ? (
        <h2>All done!</h2>
      ) : notDoneTasks === 1 ? (
        <h2>{notDoneTasks} item left</h2>
      ) : (
        <h2>{notDoneTasks} items left</h2>
      )}

      <Filters filterTasks={filterTasks} />
      <button onClick={() => deleteTaskHandler()}>Clear completed</button>
    </footer>
  )
}
