import ToDoFooter from './ToDoFooter'
import ToDoForm from './ToDoForm'
import ToDoHeader from './ToDoHeader'
import ToDoList from './ToDoList'
import { useDispatch } from 'react-redux'
import {
  addTodo,
  completeTodo,
  deleteDoneTodos,
  filterTodos,
} from '../../store/todos/todosSlice'

export default function TodoApp() {
  const dispatch = useDispatch()
  
  const completeTodoHandler = (taskId: number) => {
    dispatch(completeTodo(taskId))
  }

  const deleteTodoHandler = () => {
    dispatch(deleteDoneTodos())
  }

  const addTodoHandler = (label: string) => {
    dispatch(addTodo(label))
  }
  const filterTodosHandler = (filter: Filter) => {
    dispatch(filterTodos(filter))
  }
  return (
    <section
      className="bg-[#f5f5f5] min-w-[100vw] min-h-[100vh]
     flex flex-col items-center justify-center text-center relative z-10"
    >
      <ToDoHeader />
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
        <ToDoForm addTodoHandler={addTodoHandler} />
        <ToDoList completeTodoHandler={completeTodoHandler} />
        <ToDoFooter
          filterTodosHandler={filterTodosHandler}
          deleteTodoHandler={deleteTodoHandler}
        />
      </main>
    </section>
  )
}
