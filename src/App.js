
import { useSelector, useDispatch } from "react-redux"
import Types from './redux/actionTypes'


function App() {
	const state = useSelector(state => state)
	const dispatch = useDispatch()
	console.log(state);
	return (
		<div className="App">
			<h1>Redux</h1>
			<button onClick={() => dispatch({type: Types.deleteTodosById, payload:{id:2}})}>Delete</button>
			<button onClick={() => dispatch({ type: Types.toggleValid})}>toggle</button>
			<pre>{
					JSON.stringify(state.todos, null,1)
				}</pre>
		</div>
	);
}

export default App;
