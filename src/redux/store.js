import { createStore } from 'redux'
import Types from './actionTypes'

const initialState = {
	todos: [
		{
			"userId": 1,
			"id": 1,
			"title": "delectus aut autem",
			"completed": false
		},
		{
			"userId": 1,
			"id": 2,
			"title": "quis ut nam facilis et officia qui",
			"completed": false
		},
		{
			"userId": 1,
			"id": 3,
			"title": "fugiat veniam minus",
			"completed": false
		}
	],
	isValid: false,
}
function deleteByID(state, id ) {
	let newtodos = [...state.todos].filter(elem => elem.id !== id);
	return { ...state, todos: newtodos }
}
const todoRedusers = (state={}, action) => {
	if (action.type === Types.deleteTodosById) {
		return deleteByID(state, action.payload.id)
	}
	if (action.type === Types.toggleValid) {
		return { ...state, isValid: !state.isValid}
	}
	return state
}


const store = createStore(todoRedusers,initialState);

export default store