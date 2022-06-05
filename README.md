# Getting Started with Create React App

`combineReducers` - Это метод, который позволяет вместо того, чтобы создавать один огромный reducer для всего состояния приложения сразу, разбивать его на отдельные модули.
փոխանցվում է createStore ֆունկցիային, որպես առաջին արգումենտ,

- Այն ստանում է մեկ արգումենտ օրինակ `{name: nameReducer}`, որը նշանակում է որ "state"-ում գտնվող name-ի պատասխանատուն լինելու է "nameReducer" ֆունկցիան։

#

    const store = createStore(combineReducers({
    friend:friendReduser,
    serials:serialsReduser,
    }), initialState)
