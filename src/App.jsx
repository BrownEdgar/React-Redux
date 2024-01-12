
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodo, selectUsers } from './features/usersSlice'

export default function App() {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodo())
  }, [dispatch])

  return (
    <div>
      <pre>
        {JSON.stringify(users, null, 1)}
      </pre>
    </div>
  )
}




// link https://youtu.be/59aQZ3XF_fY?list=PLqdFiRm1ZCkvBJsP9LFJygMVtjSl-Sanp