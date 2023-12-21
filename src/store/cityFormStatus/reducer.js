// @ts-nocheck
import store from "./index"
const defaultState = {
    ...store.state
}

let reducer = (state = defaultState,action)=>{
    let newState = JSON.parse(JSON.stringify(state))
    for(let key in store.actionNames){
        if(action.type === store.actionNames[key]){
            store.actions[store.actionNames[key]](newState,action)
        }
    }
    return newState
}
export default reducer