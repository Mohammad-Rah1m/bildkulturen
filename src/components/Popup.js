"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closePopup } from "@/store/features/popup/PopupSlice";
import { MdClose } from "react-icons/md";

const Popup = () => {
  const { isPopupOpen, popupText, popupTitle } = useSelector(
    (state) => state.popup
  );
  const dispatch = useDispatch();
  if (!isPopupOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 py-10">
      <div className="bg-accentGreen p-5 rounded-lg shadow-lg max-h-[70vh] overflow-y-scroll  w-[90%] lg:w-[60%] text-center relative">
        <h3 className="text-3xl text-white">{popupTitle}</h3>
        <p className="text-lg text-black mt-5">{popupText}</p>
        <button
          className="mt-5 text-black absolute right-5 top-0"
          onClick={() => dispatch(closePopup())}
        >
          <MdClose className="text-2xl"/>
        </button>
      </div>
    </div>
  );
};

export default Popup;
