import { combineReducers, createStore } from "redux";


const initialState = {
	serials: [
		{
			id: 1,
			title: "friends",
			ratings: "9.8",
			actors: ['Courteney Cox', 'Jennifer Aniston', 'Lisa Kudrow', 'Matt LeBlanc', 'Matthew Perry', 'David Schwimmer'],
			poster: "https://wallpapercave.com/wp/wp3256631.jpg"
		},
		{
			id: 2,
			title: "Prison Break",
			ratings: "9.7",
			actors: ['Wentworth Miller', 'Dominic Purcell', 'Robert Knepper', 'Sarah Wayne Callies', 'William Fichtner'],
			poster: "https://wallpapercave.com/wp/wp3988846.jpg"
		}
	],

	friend: {
		name: "Jhon snow"
	}
}

function friendReduser(state={}, action) {
	if (action.type === "change-friend-name") {
		return { 
			...state,
			 name: action.payload.name
		 }
	}
	return state;
}
function serialsReduser(state = [], action) {
	if (action.type === "add-serials") {
		return {
			...state,
			
		}
	}
	return state;
}


const store = createStore(combineReducers({
	friend:friendReduser,
	serials:serialsReduser,
}), initialState)


export default store