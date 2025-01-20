"use client"
import React from 'react'
import Image from 'next/image'
import { useDispatch } from "react-redux";
import { openPopup } from '@/store/features/popup/PopupSlice';

const MenuCard = ({imagePath,title,text}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openPopup({title,text})); // Trigger popup with text
  };

  return (
    <div className='bg-accentGreen p-2 rounded-lg hover:bg-accentPurple cursor-pointer transition-colors duration-500 ease-out w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]' onClick={handleClick}>
      <Image
      alt="Menu Cart Icon"
      src={imagePath}
      layout="responsive"
      width={50}
      height={50}
      />
    </div>
  )
}

export default MenuCard
