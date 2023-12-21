// @ts-nocheck
import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
import  thunk from 'redux-thunk'
import getCityForm from './cityFormStatus/reducer'


const reducers = combineReducers({
    getCityForm
})

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(thunk)))
export default store