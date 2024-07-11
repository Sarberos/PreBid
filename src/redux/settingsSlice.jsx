import { createSlice } from "@reduxjs/toolkit";

const settingSlice=createSlice({
    name:'settings',
    initialState:{
        currentlang:"ru",
        langVariation:{
            ru:"ru",
            en:"en",
            pl:"pl"
        }
    },
    reducers:{
        setCurrentLang:(state,action)=>{
            state.currentlang=action.payload
        }
    },

}
)

export const {setCurrentLang}=settingSlice.actions

export default settingSlice.reducer