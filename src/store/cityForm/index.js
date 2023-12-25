// @ts-nocheck
import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
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
// 异步获取数据
// 触发dispatch
//1.自己封装
// export const asyncGetCountByApi = ()=> async dispatch =>{
//     const {data} = await axios.get('')
//     return data
// }
// 2.使用crateAsyncThunk
export const listData = createAsyncThunk('list/listData',async () =>{
    const {data} = await axios.get('https://www.fastmock.site/mock/162a46feee93219950564d2a1f2d591e/bicycle/menu')
    return data
})

const useSlice = createSlice({
    // 标识符（必须有）
    name:'cityForm',
    // state
    initialState,
    // reducer具体同步方法(actions)
    reducers,
    // 配置异步方法reducer(async-actions)
    extraReducers:builder=>{
        // 成功获取
        builder.addCase(listData.fulfilled,(state,{payload})=>{
            // console.log(payload);
        })
        // 获取失败
        builder.addCase(listData.rejected,(state,error)=>{
            console.log(error);
        })
        // 进行中
        builder.addCase(listData.pending,state =>{
            console.log(`${state}进行中`);
        })
    }
})
export const {setCityForm} = useSlice.actions

export default useSlice.reducer