import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './redux/loginRedux';

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
export default store;
