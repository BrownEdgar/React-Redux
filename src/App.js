import { useSelector, useDispatch } from "react-redux"



function App() {
	const todoList = useSelector(state => state.todo);
	const dispatch = useDispatch();
	return (
		<div className="App">
			<pre>
				{JSON.stringify(todoList,null,1)}
			
			</pre>
			<button onClick={() => dispatch({
				type: "ADD-TODO",
				payload: {
					"userId": 1,
					"id": 5,
					"title": "My todo",
					"completed": false
				}
			})}>add todo</button>
		</div>
	);
}

export default App;
