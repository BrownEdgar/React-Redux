
import { useSelector, useDispatch } from "react-redux";
import { loadSerial } from './redux/features/seriales';
;


function Serials() {

	const serials = useSelector(state => state.serials);
	console.log('serials', serials);
	const dispatch = useDispatch()

	return (
		<div className="App">
			<h1>friends</h1>
			<ul>
				{serials.map((elem, index) => {
					return <li key={index}><pre>{JSON.stringify(elem, null, 2)}</pre></li>
			})}
			</ul>

			{/* Error: Objects are not valid as a React child ( If you meant to render a collection of children, use an array instead. Այստեղ պետք է redux-thunk*/ }
			<button onClick={() => dispatch(loadSerial())}>Add Serial</button>

		
		</div>
	);
}

export default Serials;
