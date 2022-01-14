import { createStore } from "redux";
import ActionTypes from './actionTypes'
const initialState = {
	arr:[],
	bonus: 1500,

	friend: {
		name: "Jhon snow"
	}

}
function createReduser(state, action) {
	if (action.type === ActionTypes.changeName) {
		return { friend: { name: action.payload.name } }
	}
	return state;

}
const store = createStore(createReduser, initialState )
export default store