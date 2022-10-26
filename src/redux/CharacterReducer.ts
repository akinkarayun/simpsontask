import {createSlice} from '@reduxjs/toolkit';
import {Simpson} from '../Types/types';

export const characterSlice = createSlice({
  name: 'characters',
  initialState: {value: [] as Simpson[]},
  reducers: {
    addNewCharacter: (state, action) => {
      state.value.push(action.payload);
    },
    deleteCharacter: (state, action) => {
      state.value = state.value
        .flat()
        .filter(item => item.id !== action.payload.id);
    },
  },
});
export const {addNewCharacter, deleteCharacter} = characterSlice.actions;
export default characterSlice.reducer;
