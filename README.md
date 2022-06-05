# Part 4

1. [applyMiddleware]

const store = createStore(combineReducers({
friend: friendReduser,
serials: serialsReduser,
}),
initialState,
applyMiddleware(myMiddleWare, middleNameChanger))
