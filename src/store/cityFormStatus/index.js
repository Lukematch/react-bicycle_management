// 导入redux
const redux = require('redux')

// 设置状态（初始化数据）
// const initState = {
//     count:0
// }
// store reducer action
// store
const store = {
    state:{
        cityForm:{}
    },
    actions:{
        setCityForm(newState,action){
           newState.cityForm = action.value
        }
    },
    asyncAction:{

    },
    actionNames:{}
}
let actionNames = {}
for(let key in store.actions){
    actionNames[key] = key
}
store.actionNames = actionNames
export default store