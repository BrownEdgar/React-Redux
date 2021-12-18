/*
useSelector-ը ընդունում է ֆունկցիա,(որը վորոշում է "state"-ի որ մասն մենք պետք է վերադարձնենք) և որի մեջ մեզ է հասնում ամբողջ "state"-ը
մենք այդ "state"-ից կարող ենք վերցնել միայն մեր ուզածը (ՏՈՂ X)
useDispatch() Hook-ֆունկցիան կանչում էնք և փողանցում ենք "action" օբյեկտ, որը մկարագրում է "state"-ի "ապագա" փոփողության մանրամասները։
"type"- համաձայնեցված անուն է, որը որոսհում է թե ինչ պետք է "reducer"-ը ("state"-ի փեփեղության համար պատասղանատու ֆունկցիան է)
"payload"-ը օգտակար տվյալները
*/

import './App.css';
import { useSelector, useDispatch } from "react-redux"


function App() {

	const name = useSelector(state => state.friend.name)
	const dispatch = useDispatch()

	return (
		<div className="App">
			<h1>{name}</h1>
			<input type="text"
				value={name}
				onChange={(e) => {
					dispatch({
						type: "change-friend-name",
						payload: { name: e.target.value }
					})
				}} />
		</div>
	);
}

export default App;
