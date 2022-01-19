import { createStore } from 'redux'

const initialState = {
	todo:[
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
	]
}

const isConteins = (list,newItem) => { 
	return list.some(elem => elem.id === newItem.id)
 }
const createReducer = (state,action) => {
	if (action.type === "ADD-TODO") {
		return !isConteins(state.todo, action.payload) 
		? {todo: [...state.todo, action.payload]}
		: state
	}
	return state
}
const store = createStore(createReducer, initialState)

export default store;