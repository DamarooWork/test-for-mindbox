import { useState } from 'react'
import ToDoFooter from './ToDoFooter'
import TodoForm from './TodoForm'
import TodoHeader from './TodoHeader'
import ToDoList from './ToDoList'

const uniqueId = () => Math.floor(Math.random() * Date.now())
export default function TodoApp() {
  const defaultTasks: ITask[] = [
    { id: 1, completed: false, label: 'Тестовое задание', show: true },
    { id: 2, completed: true, label: 'Прекрасный код', show: true },
    { id: 3, completed: false, label: 'Покрытие тестами', show: true },
  ]
  let tasksFromLocal: string = localStorage.getItem('Todos')!
  let localTasks: ITask[] = JSON.parse(tasksFromLocal)

  const [tasks, setTasks] = useState<ITask[]>(
    localTasks ? localTasks : defaultTasks
  )

  const completeTaskHandler = (taskId: number) => {
    const updatedTasks = tasks.map((task) => {
      const completed = !task.completed
      return task.id === taskId ? { ...task, completed } : task
    })
    setTasks(updatedTasks)
    let string = JSON.stringify(updatedTasks)
    localStorage.setItem('Todos', string)
  }

  const deleteTaskHandler = () => {
    const updatedTasks = tasks.filter((task) => task.completed === false)
    setTasks(updatedTasks)
    let string = JSON.stringify(updatedTasks)
    localStorage.setItem('Todos', string)
  }

  const newTaskHandler = (label: string) => {
    const newTask: ITask = {
      id: uniqueId(),
      completed: false,
      label,
      show: true,
    }
    const updatedTasks: ITask[] = [...tasks, newTask]
    setTasks(updatedTasks)
    let string = JSON.stringify(updatedTasks)
    localStorage.setItem('Todos', string)
  }
  const filterTasks = (filter: Filter) => {
    let updatedTasks
    switch (filter) {
      case 'All':
        updatedTasks = tasks.map((task) => {
          task.show = true
          return task
        })
        setTasks(updatedTasks)
        break
      case 'Active':
        updatedTasks = tasks.map((task) => {
          !task.completed ? (task.show = true) : (task.show = false)
          return task
        })
        setTasks(updatedTasks)
        break
      case 'Completed':
        updatedTasks = tasks.map((task) => {
          task.completed ? (task.show = true) : (task.show = false)
          return task
        })
        setTasks(updatedTasks)
        break
    }
    //
  }
  return (
    <section
      className="bg-[#f5f5f5] min-w-[100vw] min-h-[100vh]
     flex flex-col items-center justify-center text-center relative z-10"
    >
      <TodoHeader />
      <main
        className="relative w-[300px]   flex flex-col sm:w-[500px]   shadow-sm
       bg-white after:absolute  after:z-[-1]
       after:sm:w-[492px] after:w-[292px] after:h-full after:bottom-[-8px] 
       after:shadow-sm after:left-[4px] after:bg-white
       before:absolute  before:z-[-2]
       before:sm:w-[484px] before:w-[284px] before:h-full before:bottom-[-16px] 
       before:shadow-sm before:left-[8px] before:bg-white
       "
      >
        <TodoForm newTaskHandler={newTaskHandler} />
        <ToDoList tasks={tasks} completeTaskHandler={completeTaskHandler} />
        <ToDoFooter
          tasks={tasks}
          filterTasks={filterTasks}
          deleteTaskHandler={deleteTaskHandler}
        />
      </main>
    </section>
  )
}
