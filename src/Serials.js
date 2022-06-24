import React from 'react'
import { useSelector, useDispatch } from "react-redux"
export default function  Serials() {
	const serials = useSelector(state => state.serials)

	const dispatch = useDispatch()
	return (
		<div>
			{serials.map(elem => {
				return (
					<div>
						<pre>
							{JSON.stringify(elem,null,1)}
						</pre>
					</div>

				)
			})}

			<button onClick={() => dispatch({
				type: "ADD_SERIALS",
				payload: {
					id: 3,
					title: "new friends 2022",
					ratings: "9.8",
					actors: ['Courteney Cox', 'Jennifer Aniston', 'Lisa Kudrow', 'Matt LeBlanc', 'Matthew Perry', 'David Schwimmer'],
					poster: "https://wallpapercave.com/wp/wp3256631.jpg"
				}
			})}>Add Serials</button>
		</div>
	)
}
