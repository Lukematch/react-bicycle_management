// @ts-nocheck
// 合并reducer
// 使用react-toolkit后可以不使用
// import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
// import  thunk from 'redux-thunk'
// import getCityForm from './cityFormStatus/reducer'

// const reducers = combineReducers({
//     getCityForm
// })

// let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

// 使用中间件让redux支持异步处理
// const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(thunk)))
// export default store



// rtk写法
import { configureStore } from "@reduxjs/toolkit"
import cityForm from "./cityForm"
// redux-toolkit
// 可以单独传一个reducer，也可以传一个对象
export default configureStore({
    reducer:{
        cityForm
    }
})
