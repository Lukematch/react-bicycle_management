// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    newUser:{}
}

const reducers = {
    createUser(state,action){
        state.newUser = action.payload
     }
}


const useSlice = createSlice({
    name:'createUser',
    initialState,
    reducers
})
export const {createUser} = useSlice.actions

export default useSlice.reducer