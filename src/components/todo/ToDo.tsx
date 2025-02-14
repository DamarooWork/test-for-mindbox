import { useDispatch } from 'react-redux'
import { completeTodo, deleteTodo } from '../../store/todos/todosSlice'
import gsap from 'gsap'
import deleteIcon from '/deleteIcon.png'
import { useRef } from 'react'

function ToDo({ label, completed, id, show }: ITodo, key: number) {
  const dispatch = useDispatch()
  const todo = useRef<HTMLLIElement>(null)
  const handleDeleteTodo = (id: number) => {
    gsap.to(todo.current, { opacity: 0, duration: 1 })
    setTimeout(() => {
      dispatch(deleteTodo(id))
    }, 1000)
  }
  return (
    <li
      ref={todo}
      key={key}
      className={`border-b-[1px] relative py-4 px-2 text-left ${
        show ? 'block' : 'hidden'
      }
  `}
    >
      <label
        className="container flex items-center justify-center"
        htmlFor={`todo-${id}`}
      >
        <input
          onChange={() => dispatch(completeTodo(id))}
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
      <button
        onClick={() => handleDeleteTodo(id)}
        className="absolute duration-300 -translate-y-1/2 d top-1/2 right-4 hover:scale-110 active:scale-100 will-change-transform"
      >
        <img
          className="object-cover w-5 h-auto"
          src={deleteIcon}
          alt="Delete todo icon"
        />
      </button>
    </li>
  )
}

export default ToDo
