// features/checkbox/checkboxSlice.js
import { createSlice } from '@reduxjs/toolkit';

const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState: {
    isChecked: false,
  },
  reducers: {
    toggleCheckbox: (state) => {
      state.isChecked = !state.isChecked;
    },
    setCheckbox: (state, action) => {
      state.isChecked = action.payload;
    }
  },
});

export const { toggleCheckbox, setCheckbox } = checkboxSlice.actions;
export default checkboxSlice.reducer;
