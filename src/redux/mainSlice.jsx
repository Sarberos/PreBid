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
export const carInfThunk = createAsyncThunk(
    'user/carInfThunk',
    async function (_,{ getState }){
        const state=getState()
        const response= await Fetching.carList(state.user.transports.carsLimit,state.user.transports.pagination.page)
        return response;
    }
)
export const carInfThunkWithOutAnim = createAsyncThunk(
    'user/carInfThunkWithOutAnim',
    async function (_,{ getState }){
        const state=getState()
        const response= await Fetching.carList(state.user.transports.carsLimit,state.user.transports.pagination.page)
        return response;
    }
)
export const addToFavStatus= createAsyncThunk(
    'user/addToFavStatus',
    async function(data){
        return await Fetching.favourite(data.id, data.add)
    }
)
export const getFavouriteList=createAsyncThunk(
    'user/getFavouriteList',
    async function(_,{ getState }){
        const state=getState()
        const response=Fetching.favoriteCarList(state.user.transports.carsLimit,state.user.transports.pagination.page);
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
        transports:{
            pagination:{
                page:1,
            },
            carsLimit:10,
        },
        auctions:{
            currentPage:1,
            auctionsLimit:5,
        }
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
        },
        setTransportsInf:(state,action)=>{
            state.transports.content=action.payload.content
            state.transports.pagination=action.payload.pagination           
        },
        setCarsLimit(state,action){
            state.transports.carsLimit=action.payload
        },
        setCarsListPage(state,action){
            state.transports.pagination.page=action.payload;
        },
        setAuctionCurrentPage(state,action){
            state.auctions.currentPage=action.payload
        },
        setAuctionCurrentLimit(state,action){
            state.auctions.auctionsLimit=action.payload
        },
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
        });
        builder.addCase(carInfThunk.pending,(state)=>{
            state.isLoading=true;
        });
        builder.addCase(carInfThunk.fulfilled,(state)=>{
            state.isLoading=false;
        });
        builder.addCase(getFavouriteList.pending,(state)=>{
            state.isLoading=true;
        });
        builder.addCase(getFavouriteList.fulfilled,(state)=>{
            state.isLoading=false;
        });
        
    }
});

export const {
  setIsLoading,
  setUserInf,
  setIsAuth,
  setFiltersInf,
  setTransportsInf,
  setCarsLimit,
  setCarsListPage,
  setFavouriteStatus,
  setAuctionCurrentPage,
  setAuctionCurrentLimit
} = userSlice.actions;

export default userSlice.reducer;