// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit"
// reducer切片
//初始state
const initialState = {
    cityForm:{}
}
// 切片对象会根据reducers方法自动生成action对象
//这些action对象会保存在切片对象的actions中
const reducers = {
    setCityForm(state,action){
        // console.log(action);
        state.cityForm = action.payload
     }
}
const useSlice = createSlice({
    // 标识符（必须有）
    name:'cityForm',
    // state
    initialState,
    // reducer具体方法(actions)
    reducers
})
export const {setCityForm} = useSlice.actions
export default useSlice.reducer