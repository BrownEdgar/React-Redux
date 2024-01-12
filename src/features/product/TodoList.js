import { useSelector } from 'react-redux'

export function TodoList() {
  const todolist = useSelector((state) => state.todos.todolist)

  return (
    <div>
      <ul>
        {todolist.map(elem => {
          return (
            <li key={elem.id}>{elem.text}</li>
          )
        })}
      </ul>
    </div>
  )
}