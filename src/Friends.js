
import { useSelector, useDispatch } from "react-redux"

function Friends() {
//	Էստեղ ամբողջ "state"-ից վերցնում ենք միայն այն ինչ պետք է կոնկրետ այս կոմպոնենտին
// վերցնում ենք միայն "friends" զանգվածը
	const friends = useSelector(state => state.friend)
	const dispatch = useDispatch()

	return (
		<div className="App">
			<h1>friends</h1>
			<ul>
				{Object.values(friends).map((elem, index) => {
				return <li key={index}>{elem}</li>
			})}
			</ul>
			
			<button onClick={() => dispatch({
				type:'add-friends',
				payload:"Edgar" 
			})}>Add Friend</button>

		
		</div>
	);
}

export default Friends;
