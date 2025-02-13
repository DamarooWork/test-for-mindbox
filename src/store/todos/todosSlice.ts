import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getUniqueNumber } from '../../lib/utils'

const initialState: ITodo[] = [
  { id: 1, completed: false, label: 'Тестовое задание', show: true },
  { id: 2, completed: true, label: 'Прекрасный код', show: true },
  { id: 3, completed: false, label: 'Покрытие тестами', show: true },
]
let tasksFromLocal: string = localStorage.getItem('Todos')!
let localTasks: ITodo[] = JSON.parse(tasksFromLocal)

const todosSlice = createSlice({
  name: 'todos',
  initialState: localTasks ? localTasks : initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: ITodo = {
        id: getUniqueNumber(),
        completed: false,
        label: action.payload,
        show: true,
      }
      state.push(newTodo)
      let string = JSON.stringify(state)
      localStorage.setItem('Todos', string)
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      const updatedTodos = state.map((todo) => {
        const completed = !todo.completed
        return todo.id === action.payload ? { ...todo, completed } : todo
      })
      let string = JSON.stringify(updatedTodos)
      localStorage.setItem('Todos', string)
      return updatedTodos
    },
    deleteDoneTodos: (state) => {
      const updatedTodos = [...state].filter((todo) => todo.completed === false)
      let string = JSON.stringify(updatedTodos)
      localStorage.setItem('Todos', string)
      return updatedTodos
    },
    filterTodos: (state, action: PayloadAction<Filter>) => {
      switch (action.payload) {
        case 'All':
          state.map((todo) => {
            todo.show = true
          })
          break
        case 'Active':
          state.map((todo) => {
            !todo.completed ? (todo.show = true) : (todo.show = false)
          })
          break
        case 'Completed':
          state.map((todo) => {
            todo.completed ? (todo.show = true) : (todo.show = false)
          })
          break
      }
    },
  },
})

export const { addTodo, completeTodo, deleteDoneTodos, filterTodos } =
  todosSlice.actions

export default todosSlice.reducer
