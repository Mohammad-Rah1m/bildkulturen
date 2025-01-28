import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPopupOpen: false,
  popupTitle:"",
  popupText: "",
};

const smallPopupSlice = createSlice({
  name: "smallPopup",
  initialState,
  reducers: {
    openPopup: (state, action) => {
      state.isPopupOpen = true;
      state.popupTitle = action.payload.title;
      state.popupText = action.payload.text; // Set popup content
    },
    closePopup: (state) => {
      state.isPopupOpen = false;
      state.popupTitle = "";
      state.popupText = ""
    },
  },
});

export const { openPopup, closePopup } = smallPopupSlice.actions;

export default smallPopupSlice.reducer;
