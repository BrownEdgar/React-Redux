import { useDispatch } from "react-redux"
import { incrementBy } from './features/product/prodactSlice';
import { Product } from './features/product/Product';



function App() {
  const dispatch = useDispatch();
  // այստեղ պետք է action-ը կաչենք
  const withCraeteAction = () => dispatch(incrementBy())
  return (
    <div className="App">
      <button onClick={withCraeteAction}>withCraeteAction</button>
      <Product />
    </div>
  );
}

export default App;
