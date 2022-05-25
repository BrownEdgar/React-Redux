//////////////////////////////////////////////////////////////
//						  ԱՅՍ ՄԱՍՈՒՄ (5)
// * Այս մասում կատարում ենք "async" գործողություններ,Ջնջված են "applyMiddleware"-ը
// * Օգտագործում ենք "redux-thunk"-ը
// * ՋՆջված է "frirnds" մասնիկը
//////////////////////////////////////////////////////////////

import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import { serialsReduser, initialSerialsValue } from './features/seriales'

import thunk from "redux-thunk"

const initialState = {
	serials: initialSerialsValue,
}


const store = createStore(combineReducers({
	serials:serialsReduser,
}), initialState,
	applyMiddleware(thunk))


export default store