import {createSlice} from "@reduxjs/toolkit";

const initialState={
    show:false
}

export const LanguageSlice=createSlice({
    name:'language',
    initialState,
    reducers:{

        isShowSidebar:(state,{payload})=>{
            console.log(payload)
            state.show=payload
        }
    }
})

export const {isShowSidebar}=LanguageSlice.actions
export default LanguageSlice.reducer