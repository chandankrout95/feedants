import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import competitionReducer from './slices/competitionSlice';

export default configureStore({
  reducer: { auth: authReducer, competition: competitionReducer },
});
