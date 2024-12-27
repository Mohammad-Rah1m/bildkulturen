import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./features/popup/PopupSlice";
import smallPopupReducer from './features/smallPopup/SmallPopupSlice'

// This function creates the Redux store
export const makeStore = () => {
  return configureStore({
    reducer: {
      popup: popupReducer,
      smallPopup:smallPopupReducer,
    },
  });
};
