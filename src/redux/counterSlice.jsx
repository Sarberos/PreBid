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
        const response= await Fetching.userInf()
        return response;
    }
)

const userSlice =createSlice({
    name: 'user',
    initialState :{
        isLoading: false,
        isAuth: false,
        userInf:{
            access_rights: 0,
            client: 0,
            role: 0,
            user: 0,
        },
    },
    reducers:{
        setUserInf:(state,action)=>{
            state.userInf={};
            state.userInf.access_rights=action.payload.access_rights;
            state.userInf.client=action.payload.client;
            state.userInf.role=action.payload.role;
            state.userInf.user=action.payload.user;
        },
        setIsAuth: (state,action)=>{
            state.isAuth=action.payload==="success"? true : action.payload===false ? false :'';
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

export const {setUserInf,setIsAuth} =userSlice.actions;

export default userSlice.reducer;