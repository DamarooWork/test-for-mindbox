import { createSlice } from '@reduxjs/toolkit'

const initialState: ITodo[] = [
  { id: 1, completed: false, label: 'Тестовое задание', show: true },
  { id: 2, completed: true, label: 'Прекрасный код', show: true },
  { id: 3, completed: false, label: 'Покрытие тестами', show: true },
]

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
    },
  },
})

export default todosSlice.reducer
