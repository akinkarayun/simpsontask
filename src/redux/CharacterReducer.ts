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
    updateLocation: (state, action) => {
      let from = state.value
        .flat()
        .findIndex(item => item?.avatar === action.payload?.x?.avatar);
      console.log(from);
      let to = state.value
        .flat()
        .findIndex(item => item?.avatar === action.payload?.y?.avatar);
      let newArray = [] as Simpson[];
      const fromItem = state.value[from];
      if (from > to) {
        const startToTo = to > 0 ? state.value.slice(0, to) : [];
        const toToFrom = state.value.slice(to, from);
        const fromToEnd = state.value.slice(from + 1, state.value.length);
        state.value = newArray.concat(
          startToTo,
          [fromItem],
          toToFrom,
          fromToEnd,
        );
      }
      if (to > from) {
        const startToFrom = from > 0 ? state.value.slice(0, from) : [];
        const fromToTo = state.value.slice(from + 1, to + 1);
        const toToEnd = state.value.slice(to + 1, state.value.length);
        state.value = newArray.concat(startToFrom, fromToTo, fromItem, toToEnd);
      }
    },
  },
});
export const {addNewCharacter, deleteCharacter, updateLocation} =
  characterSlice.actions;
export default characterSlice.reducer;
