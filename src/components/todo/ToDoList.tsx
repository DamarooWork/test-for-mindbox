import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export default function ToDoList({
  completeTodoHandler,
}: {
  completeTodoHandler: (id: number) => void
}) {
  const todos = useSelector((state: RootState) => state.todos)
  return (
    <ul
      role="list"
      className="max-h-[50vh] overflow-y-auto"
      aria-labelledby="list-heading"
    >
      {todos.length ? (
        todos.map(({ label, completed, id, show }: ITodo) => (
          <li
            key={id}
            className={`border-b-[1px] py-4 px-2 text-left ${
              show ? 'block' : 'hidden'
            }
          `}
          >
            <label
              className="container flex items-center justify-center"
              htmlFor={`todo-${id}`}
            >
              <input
                onChange={() => completeTodoHandler(id)}
                checked={completed}
                className="checkbox"
                id={`todo-${id}`}
                type="checkbox"
                data-testid="checkbox"
              />
              <span className="checkmark"></span>
              <p
                className={`${
                  completed ? 'line-through text-[#afafaf]' : ''
                } leading-5`}
              >
                {label}
              </p>
            </label>
          </li>
        ))
      ) : (
        <li className="border-b-[1px]  py-2 px-1  text-center text-sm">
          <span className="opacity-50">No todos...</span>
        </li>
      )}
    </ul>
  )
}
