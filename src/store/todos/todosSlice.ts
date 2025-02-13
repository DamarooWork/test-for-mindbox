import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { uniqueId } from '../../lib/utils'

const initialState: ITodo[] = [
  { id: 1, completed: false, label: 'Тестовое задание', show: true },
  { id: 2, completed: true, label: 'Прекрасный код', show: true },
  { id: 3, completed: false, label: 'Покрытие тестами', show: true },
]

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: ITodo = {
        id: uniqueId(),
        completed: false,
        label: action.payload,
        show: true,
      }
      state.push(newTodo)
    },
    deleteDoneTodos: (state) => {
      state.filter((todo) => todo.completed === false)
    },
  },
})

export const { deleteDoneTodos, addTodo } = todosSlice.actions

export default todosSlice.reducer
