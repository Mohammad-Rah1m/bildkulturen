import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPopupOpen: false,
  popupTitle:"",
  popupText: "",
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopup: (state, action) => {
      state.isPopupOpen = true;
      state.popupText = action.payload.text; // Set popup content
      state.popupTitle = action.payload.title;
    },
    closePopup: (state) => {
      state.isPopupOpen = false;
      state.popupText = "";
      state.popupTitle = "";
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;

export default popupSlice.reducer;
