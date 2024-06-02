import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import Fetching from '../http/api_request';


export const loginThunk = createAsyncThunk(
    'user/loginThunk',
    async function (data){
        const response=  await Fetching.login(data.email,data.password)
        return response;
    }
)
export const logoutThunk = createAsyncThunk(
    'user/logoutThunk',
    async function (){
        const response= await Fetching.logout()
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
export const userFiltersThunk = createAsyncThunk(
    'user/userFiltersThunk',
    async function (){
        const response= await Fetching.filterInf()
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
        filters:[],
        myFilters:{ },
    },
    reducers:{
        setUserInf:(state,action)=>{
            state.userInf={};
            state.userInf.access_rights=action.payload.access_rights;
            state.userInf.client=action.payload.client;
            state.userInf.role=action.payload.role;
            state.userInf.user=action.payload.user;
        },
        setFiltersInf: (state,action)=>{
            state.filters=action.payload.filters;
            state.myFilters=action.payload.myFilter;
        },
        setIsAuth: (state,action)=>{
            state.isAuth=action.payload==="success"? true : action.payload==='fail' ? false :'';
        },
        setIsLoading: (state,action)=>{
            state.isLoading=action.payload;
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(loginThunk.pending,(state)=>{
            state.isLoading=true;
        });
        builder.addCase(loginThunk.fulfilled,(state)=>{
            state.isLoading=false;
        })
        builder.addCase(userInfThunk.pending,(state)=>{
            state.isLoading=true;
        });
        builder.addCase(userInfThunk.fulfilled,(state)=>{
            state.isLoading=false;
        })
        builder.addCase(logoutThunk.pending,(state)=>{
            state.isLoading=true;
        });
        builder.addCase(logoutThunk.fulfilled,(state)=>{
            state.isLoading=false;
            state.isAuth=false;
            localStorage.removeItem('access_token');
        })
    }
});

export const {setUserInf,setIsAuth,setFiltersInf} =userSlice.actions;

export default userSlice.reducer;