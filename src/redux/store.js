import { combineReducers, createStore } from "redux"

function simpleReducer(state = 'State from Redux', action){
    switch (action.type) {
        case 'update':
            return "Updated STATE"
        case 'update_by':
            return action.payload;
        default:
            return state
    }
}

function themeReducer(state = true, action){
    switch (action.type) {
        case 'dark':
            return !state;
        default:
            return state
    }
}

const rootReducer = combineReducers({
    simple: simpleReducer,
    theme: themeReducer
})
export const store = createStore(rootReducer)
