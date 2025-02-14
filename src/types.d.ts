interface ITodo {
  id: number
  label: string
  completed: boolean
  show: boolean
}
interface IFormTodo {
  label: string
}
type Filter = 'All' | 'Active' | 'Completed'
