"use client"
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closePopup } from "@/store/features/smallPopup/SmallPopupSlice";

const Popup = () => {
  const { isPopupOpen, popupText,popupTitle } = useSelector((state) => state.smallPopup);
  const dispatch = useDispatch();
  if (!isPopupOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-accentPurple p-5 rounded-lg shadow-lg w-96 max-h-[70vh] overflow-y-scroll">
        <h2 className="text-white text-3xl">{popupTitle}</h2>
        <p className="text-lg text-white">{popupText}</p>
        <button
          className="mt-5 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          onClick={() => dispatch(closePopup())}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
