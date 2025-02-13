import { SubmitHandler, useForm } from 'react-hook-form'
import arrowDown from '/icons8-arrow-down-30.png'

export default function TodoForm({
  newTaskHandler,
}: {
  newTaskHandler: (label: string) => void
}) {
  const { register, handleSubmit, reset, formState, clearErrors } =
    useForm<IFormTodo>({
      shouldUnregister: true,
      defaultValues: { label: '' },
    })

  const onSubmit: SubmitHandler<IFormTodo> = (data: IFormTodo) => {
    newTaskHandler(data.label)
    reset()
    clearErrors()
  }

  const errors = Object.values(formState.errors)
  return (
    <form
      className="w-full border-b-[1px] relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      <img
        className="absolute w-4 h-4 opacity-40 top-5 left-3"
        src={arrowDown}
        alt="Arrow down"
      />
      <label className="hidden" htmlFor="task">
        New Task
      </label>
      <input
        className="w-full px-10 py-4  placeholder:text-[#eaeaea] placeholder:italic
        focus:outline-none focus:border-[#eaeaea] focus:ring-[#eaeaea] focus:ring-1
        "
        autoComplete="off"
        id="task"
        placeholder="What needs to be done?"
        {...register('label', {
          required: 'Todo cannot be blank',
          validate: {
            lessThan30: (v) =>
              v.length <= 30 || 'Todo cannot be longer than 30 characters.',
          },
        })}
      />
      <ul className="absolute bottom-0 left-[50%] translate-x-[-50%] w-full">
        {errors.map((error, i) => (
          <li key={i} className="text-red-500 text-sm opacity-60">
            {error.message}
          </li>
        ))}
      </ul>
      <button className="hidden" type="submit">
        add
      </button>
    </form>
  )
}
