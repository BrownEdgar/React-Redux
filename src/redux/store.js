//////////////////////////////////////////////////////////////
//						  ԱՅՍ ՄԱՍՈՒՄ (4)
// * Հեռացված է "Seraials" ֆայլը
// * Այս մասում ստեղծվում է "myMiddleWare" անունով ֆունկցիան, այն կաշխատի ամեն մի փոփոխության ժամանակ
// * "createStore"-ի մեջ փոխանցվում է  "applyMiddleware"-ին  ("redux"-ում գտնվող ֆունկցիային) որպես 3-րդ արգումենտ  տող 35
// * Middleware-րը կարող են լինել բազմաթիվ
// * Middleware-րը կարող են միջանկյալ փոխել store-ը (մեր տվյալները) քանի,որ նրանց է հասնում "action"-ը
//////////////////////////////////////////////////////////////

import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import { friendReduser, initialFriendsValue } from './features/friends'
import { serialsReduser, initialSerialsValue } from './features/seriales'

// mas 4 middleWare
let count = 0
function myMiddleWare(store) {
	return function (next) {
		return function (action) {
			console.log(`middleWare run ${count++} times`);
			//Այս տողը եթե չգրեն առաջ չի անցնի, կտպի միայն "log"-ը 
			if (action.type === "ADD_SERIALS") {
				action.payload.date = new Date().toLocaleDateString()
			}
		
		}
	}
}

const middleNameChanger = (store) => (next) => (action) => {
	if (action.type === "add-friends") {
		action.payload += `🎁`;
	}
	return next(action);
}

const initialState = {
	serials: initialSerialsValue,
	friend: initialFriendsValue
}


const store = createStore(combineReducers({
	friend: friendReduser,
	serials: serialsReduser,
}),
	initialState,
	applyMiddleware(myMiddleWare, middleNameChanger))


export default store