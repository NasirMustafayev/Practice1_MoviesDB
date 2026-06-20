import { combineReducers, createStore } from "redux"

// function simpleReducer(state = 'State from Redux', action){
//     switch (action.type) {
//         case 'update':
//             return "Updated STATE"
//         case 'update_by':
//             return action.payload;
//         default:
//             return state
//     }
// }
const initialLoginState = localStorage.getItem('login') ?
JSON.parse(localStorage.getItem('login')) 
:
 {
    isLogged: false,
    user: null
}

function themeReducer(state = true, action){
    switch (action.type) {
        case 'dark':
            return !state;
        default:
            return state
    }
}

function moviesReducer(state = [], action) {
    switch (action.type){
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state        
        }
}

function loginReducer(state = initialLoginState, action){
    switch(action.type){
        case 'LOGIN':
            return {isLogged: true, user: action.payload};
        case 'LOGOUT':
            localStorage.removeItem('login')
            return {isLogged: false, user : null};
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    // simple: simpleReducer,
    theme: themeReducer,
    movies: moviesReducer,
    login: loginReducer
})
export const store = createStore(rootReducer)
