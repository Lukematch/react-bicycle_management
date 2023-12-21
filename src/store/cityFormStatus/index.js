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
        cityForm:{city_id:'北京'}
    },
    actions:{
        setCityForm(newState,action){
            newState = action.value
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