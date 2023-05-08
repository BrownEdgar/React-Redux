import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProductsAsync, cancelFilter, complitedTodo, filteredTodo, selectComplited } from './prodactSlice'


export function Product() {
  // այս կտորը փողարինվում է selectComplited-ով
  // новый экземпляр селектора создается всякий раз, когда компонент визуализируется.
  const products = useSelector(complitedTodo)
  const dispatch = useDispatch()

  const filterTodo = () => {
    dispatch(filteredTodo())
  }
  const filterCancel = () => {
    dispatch(cancelFilter())
  }

  useEffect(() => {
    console.log("ok");
    dispatch(addProductsAsync('https://jsonplaceholder.typicode.com/todos?_limit=10'))
  }, [])

  return (
    <div>
      <div>
        <button onClick={filterTodo}>show only complidet todo</button>
        <button onClick={filterCancel}>reset</button>
        <pre>{JSON.stringify(products, null, 1)}</pre>
      </div>
    </div>
  )
}