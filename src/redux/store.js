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

const initialWatchListState = localStorage.getItem('watchlist') ?
JSON.parse(localStorage.getItem('watchlist')): []

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
            localStorage.setItem('login', JSON.stringify({isLogged: true, user: action.payload}))
            return {isLogged: true, user: action.payload};
        case 'LOGOUT':
            localStorage.removeItem('login')
            return {isLogged: false, user : null};
        default:
            return state;
    }
}

function watchlistReducer(state = initialWatchListState, action){
    switch(action.type){
        case 'ADD':
            const updated = [...state, action.payload];
            localStorage.setItem('watchlist', JSON.stringify(updated));
            return updated
        case 'REMOVE':
            const removed = state.filter(id => id !== action.payload);
            localStorage.setItem('watchlist', JSON.stringify(removed));
            return removed
        default:
            return state
    }
}

const rootReducer = combineReducers({
    // simple: simpleReducer,
    theme: themeReducer,
    movies: moviesReducer,
    login: loginReducer,
    watchlist: watchlistReducer
})
export const store = createStore(rootReducer)
