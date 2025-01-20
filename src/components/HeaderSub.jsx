import Link from "next/link";
import React from "react";
import MenuCard from "@/components/MenuCard";

const HeaderSub = () => {
  return (
    <div className="header-sub px-5 lg:px-10 py-3">
      <div className="flex justify-between items-center">
        <div className="header-logo">
          <Link href="/">
            <h1 className="text-5xl">LOGO</h1>
          </Link>
        </div>
        <div className="flex gap-5">
          <MenuCard imagePath="/images/archive.svg" />
          <MenuCard imagePath="/images/archive.svg" />
          <MenuCard imagePath="/images/archive.svg" />
        </div>
      </div>
      <div className="flex gap-10 justify-center">
        <Link href={"/archivsuche"}>
          <p className="text-2xl lg:text-3xl font-bold">Archivsuche</p>
        </Link>
        <Link href={"/archivsuche"}>
          <p className="text-2xl font-bold">Projekt</p>
        </Link>
        <Link href={"/archivsuche"}>
          <p className="text-2xl font-bold">Hilfe</p>
        </Link>
        <Link href={"/archivsuche"}>
          <p className="text-2xl font-bold">Kontakt</p>
        </Link>
      </div>
    </div>
  );
};

export default HeaderSub;
