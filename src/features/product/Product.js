import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAll, addProductsAsync } from './prodactSlice'


export function Product() {
  const products = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('ok')
    dispatch(getAll())
    dispatch(addProductsAsync('https://jsonplaceholder.typicode.com/todos?_limit=3'))
  }, [])


  return (
    <div>
      <div>
        <pre>{JSON.stringify(products, null, 1)}</pre>
      </div>
    </div>
  )
}