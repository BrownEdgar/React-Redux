import { getASYNCSerials } from "./AsyncSerials";

export function serialsReduser(state = [], action) {
	if (action.type === "add-serials") {
		return [...state, action.payload.item]
	}
	return state;
}

export const initialSerialsValue = [
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
]

////actionCreater (thunk),որը վերադարձնում է ֆունկցիա, որը ապագայում կարող է կատարել ինչ-որ գործողություն:
// getState=> ամենավերջին ստեյտն է
// Այս ֆունկցիան dispatch-ին փոխանցելիս "error"-ից խուսափոլու համար և պետք է "store.js" ֆայլի ՝ `applyMiddleware(thunk) ` գրվածքը։thunk-ը կարողանում է  dispatch-ին փոխանցել ֆունկցիա, մենք՝ ոչ
export function loadSerial() {
	return function (dispatch, getState) {
		return getASYNCSerials().then(serial => {
			dispatch(addSerial(serial))
		})
		
	}
}
//actionCreater
function addSerial(newSerials) {
	return {
		type: "add-serials",
		payload:{
			item: newSerials
		}
	}
	
}