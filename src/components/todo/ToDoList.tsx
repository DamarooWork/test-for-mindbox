import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import ToDo from './ToDo'
export default function ToDoList() {
  const todos = useSelector((state: RootState) => state.todos)
  return (
    <ul
      role="list"
      className="max-h-[50vh] overflow-y-auto"
      aria-labelledby="list-heading"
    >
      {todos.length ? (
        todos.map((todo: ITodo) => <ToDo key={todo.id} {...todo} />)
      ) : (
        <li className="border-b-[1px]  py-2 px-1  text-center text-sm">
          <span className="opacity-50">No todos...</span>
        </li>
      )}
    </ul>
  )
}
