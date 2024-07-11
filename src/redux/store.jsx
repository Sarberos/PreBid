import { configureStore } from '@reduxjs/toolkit'
import userReducer from './mainSlice'
import settingsReducer from './settingsSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    settings: settingsReducer,
  },
})