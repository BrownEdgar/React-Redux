////////////////////////////////////////////////////////////////////////
// link => https://react-redux.js.org/using-react-redux/connect-mapstate
//  connect(mapStateToProps) ևս մեկ հնարավորություն է "state"-ից տվյալներ վերցնելու
// mapStateToProps-ը ստանում 2 պարամետր, և պետք է վերադարձնի օբյեկտ
// 1․ "state" Հիմնական "state"-ն է։
// 2․ "ownProps" Կոմպոնենտին փոխանցած ՛props՛-ն են առանձին օբյեկտի տեսքով
// mapStateToProps-ի միջոցով ՛props՛-ն ստուգելով կարող ենք կոմպոնենտին տալ համապատասղան կտորը,
// կամ եթե "state"-ից տվյալներ վերցնելու համար պետք են կոմպոնենտի ՛props՛-րը
// Կանչվում է ամեն անգամ երբ "state"-ը փոխվում է 
////////////////////////////////////////////////////////////////////////

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { getAll, addProductsAsync } from './prodactSlice'


export function Product() {
  const products = useSelector((state) => state.products)
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


const mapStateToProps = (state, ownProps) => {
  const { products } = state
  return {
    products,
    // ՛ownProps՛-ը այստեղկարող ենք չվերադարձնել, քանի որ ՛connect()՛-ը ավտոմատ կմիավորի այս թ տարբեր ՛props՛-ը մեկում!
    ownProps
  }
}

export default connect(mapStateToProps)(Product)
