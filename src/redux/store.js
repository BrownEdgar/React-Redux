import { createStore } from 'redux'

const initialState = {

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