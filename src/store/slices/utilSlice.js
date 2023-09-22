import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit';
  
  const initialState = {
    isOverlay: false,
    comment: "",
  };
  
  export const utilSlice = createSlice({
    name: 'util',
    initialState,
    reducers: {

      showOverlay: (state, action) => {
        state.isOverlay = true;
        state.comment = action.payload;

        document.body.style.overflow = "hidden";
      },

      hideOverlay: (state) => {
        state.isOverlay = false;
        
        document.body.style.overflow = "";
      },

    },
  });
  // Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
  export const {
    showOverlay,
    hideOverlay,
  } = utilSlice.actions;
  
  // exporting the reducer here, as we need to add this to the store
  export default utilSlice.reducer;