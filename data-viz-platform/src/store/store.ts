import { configureStore } from '@reduxjs/toolkit';
import variableReducer from './variableSlice';

const store = configureStore({
  reducer: {
    variables: variableReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
