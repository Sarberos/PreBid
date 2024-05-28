import { configureStore } from '@reduxjs/toolkit'
import userReducer from './mainSlice'

export default configureStore({
  reducer: {
    user: userReducer,
  },
})