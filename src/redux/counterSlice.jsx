import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import Fetching from '../http/api_request';


export const loginThunk = createAsyncThunk(
    'user/loginThunk',
    async function (data){
        const response= Fetching.login(data.email,data.password)
        return response;
    }
)
export const userInfThunk = createAsyncThunk(
    'user/userInfThunk',
    async function (){
        const response=Fetching.userInf()
        return response;
    }
)



const userSlice =createSlice({
    name: 'user',
    initialState :{
        isLoading: false,
    },
    reducers:{
        setAuthStatus:(state,action)=>{
            state.isLoading=action.payload;
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(loginThunk.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(loginThunk.fulfilled,(state, action)=>{
            state.isLoading=false;
        })
        builder.addCase(userInfThunk.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(userInfThunk.fulfilled,(state, action)=>{
            state.isLoading=false;
        })
    }
});

export const {reducers} =userSlice.actions;

export default userSlice.reducer;