import {createSlice} from '@reduxjs/toolkit';

export const characterSlice = createSlice({
  name: 'characters',
  initialState: {value: []},
  reducers: {
    addNewCharacter: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
export const {addNewCharacter} = characterSlice.actions;
export default characterSlice.reducer;
