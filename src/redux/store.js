import { createStore } from "redux";

const store = createStore(function (state, action) {
	if (action.type === "change-friend-name") {
		return { friend: { name: action.payload.name} }
	}
	return state;

}, {
	friend: {
		name: "Jhon snow"
	}
})
export default store


