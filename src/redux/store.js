//////////////////////////////////////////////////////////////
//						  ԱՅՍ ՄԱՍՈՒՄ (3)					
//  friendReduser & serialsReduser ֆունկցիաները և State-ի համապատասղան մասերը արդեն առանձնացվում են առանձին ֆայլերում, այստեղ նրանք օգտագործվում են import-ի միջոցով
// friendReduser-ում ավելացված է "add-friends" action-ը
//

//////////////////////////////////////////////////////////////

import { combineReducers, createStore } from "redux";
import { friendReduser, initialFriendsValue } from './features/friends'
import { serialsReduser, initialSerialsValue } from './features/seriales'


const initialState = {
	serials: initialSerialsValue,
	friend: initialFriendsValue
}


const store = createStore(combineReducers({
	friend:friendReduser,
	serials:serialsReduser,
}), initialState)


export default store