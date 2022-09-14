import { useDispatch } from "react-redux"
import { incrementBy } from './features/product/prodactSlice';
import { Product } from './features/product/Product';



function App() {
  const dispatch = useDispatch();
  const withCraeteAction = () => dispatch(incrementBy())
  return (
    <div className="App">
      <Product />
      <button onClick={withCraeteAction}>withCraeteAction</button>
    </div>
  );
}

export default App;
