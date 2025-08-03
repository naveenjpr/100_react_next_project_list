import { configureStore } from '@reduxjs/toolkit';
import checkboxReducer from '../slice/checkboxSlice';
import counterslice from '../slice/counterSlice';


const store = configureStore({
    reducer: {
      checkbox: checkboxReducer,
      counter: counterslice,
    },
  });
  
  export default store;
  