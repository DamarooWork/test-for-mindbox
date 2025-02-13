import { useState } from 'react'

export default function ToDoFilters({
  filterTodos,
}: {
  filterTodos: (filter: Filter) => void
}) {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  function btnClick(filter: Filter) {
    filterTodos(filter)
    setActiveFilter(filter)
  }
  return (
    <div className="flex gap-1">
      <button
        className={`${
          activeFilter === 'All' ? 'border-[#e9d9d8]' : 'border-white'
        } rounded-sm py-1 px-2 border-[1px]`}
        onClick={() => btnClick('All')}
      >
        All
      </button>
      <button
        className={`${
          activeFilter === 'Active' ? 'border-[#e9d9d8]' : 'border-white'
        } rounded-sm py-1 px-2 border-[1px]`}
        onClick={() => btnClick('Active')}
      >
        Active
      </button>
      <button
        className={`${
          activeFilter === 'Completed' ? 'border-[#e9d9d8]' : 'border-white'
        } rounded-sm py-1 px-2 border-[1px]`}
        onClick={() => btnClick('Completed')}
      >
        Completed
      </button>
    </div>
  )
}
