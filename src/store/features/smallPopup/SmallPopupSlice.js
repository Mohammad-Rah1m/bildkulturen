import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPopupOpen: false,
  popupText: "",
};

const smallPopupSlice = createSlice({
  name: "smallPopup",
  initialState,
  reducers: {
    openPopup: (state, action) => {
      state.isPopupOpen = true;
      state.popupText = action.payload; // Set popup content
    },
    closePopup: (state) => {
      state.isPopupOpen = false;
      state.popupText = "";
    },
  },
});

export const { openPopup, closePopup } = smallPopupSlice.actions;

export default smallPopupSlice.reducer;
