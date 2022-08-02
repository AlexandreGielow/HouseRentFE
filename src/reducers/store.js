import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userLogged'

export default configureStore({
  reducer: {
    user: userReducer
  }
})
