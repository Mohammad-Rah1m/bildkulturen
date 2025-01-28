"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { openPopup } from "@/store/features/smallPopup/SmallPopupSlice";
import SmallPopup from "@/components/SmallPopup";
const page = () => {
  const dispatch = useDispatch();
  const handleClick = (title, text) => {
    dispatch(openPopup({ title, text }));
  };
  return (
    <div className="px-5 lg:px-10 xl:px-32">
      <SmallPopup />
      <div className="flex flex-wrap gap-5 items-baseline justify-between lg:w-3/4 border-b-2 border-black pb-3">
        <h3 className="text-3xl font-bold">Suchoptionen</h3>
        <p
          className="font-bold cursor-pointer"
          onClick={() =>
            handleClick(
              "Suchoption",
              "dieser Button soll zu der jeweiligen Suchoption springen, die er benennt"
            )
          }
        >
          Einfach
        </p>
        <p
          className="font-bold cursor-pointer"
          onClick={() =>
            handleClick(
              "Suchoption",
              "dieser Button soll zu der jeweiligen Suchoption springen, die er benennt"
            )
          }
        >
          Erweitert
        </p>
        <p
          className="font-bold cursor-pointer"
          onClick={() =>
            handleClick(
              "Suchoption",
              "dieser Button soll zu der jeweiligen Suchoption springen, die er benennt"
            )
          }
        >
          Karte
        </p>
        <p
          className="font-bold cursor-pointer"
          onClick={() =>
            handleClick(
              "Suchoption",
              "dieser Button soll zu der jeweiligen Suchoption springen, die er benennt"
            )
          }
        >
          Thesaurus
        </p>
        <p
          className="font-bold cursor-pointer"
          onClick={() =>
            handleClick(
              "Suchoption",
              "dieser Button soll zu der jeweiligen Suchoption springen, die er benennt"
            )
          }
        >
          Register
        </p>
        <p
          className="font-bold cursor-pointer"
          onClick={() =>
            handleClick(
              "Wie funktioniert diese Seite?",
              `Dieses Informationssystem ist als Forschungsinstrument konzipiert. Das zugrundeliegende Material kann über unterschiedlich orientierte Zugänge erschlossen werden:

Bei der Einfachen Suche kommen Technologien zum Einsatz, wie sie auch in Suchmaschinen verwendet werden. Nähere Angaben zu den Trunkierungsmöglichkeiten, zur Verwendung logischer Operatoren, zu Gruppierungen usw. enthält der Hilfetext zur Einfachen Suche.

Die Erweiterte Suche bietet die Möglichkeit, verschiedene Felder miteinander zu kombinieren und so gezielt eigene Filter zu definieren. Weitere Informationen enthalten die Ausführungen zur Erweiterten Suche.

Über die Thesaurussuche ist ein systematisch-hierarchischer Zugang zu den Materialien möglich. Derzeit sind folgende Thesauren verfügbar:

- Medientechnik
- Objekt
- Methodik
- Institution
- Person

Auch über die Möglichkeiten der Thesaurussuche informiert ein ausführlicherer Hilfetext.

Die Registersuche schließlich ermöglicht eher explorativ orientierte Zugänge. Über alphabetische Indizes dient sie der Orientierung darüber, welche Personen, Orte und Sachbegriffe insgesamt verfügbar sind. Siehe hierzu auch die näheren Informationen zur Registersuche.`
            )
          }
        >
          Hilfe
        </p>
      </div>
      <div className="flex flex-wrap gap-5 py-5">
        <div className="w-full lg:w-3/4">
          <p className="font-bold">Einfache Suche</p>
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Search..."
              className="w-full py-2 pl-4 pr-10 border-2 border-black focus:outline-none"
            />
            <CiSearch className="absolute w-5 h-5 text-gray-500 right-3 top-2.5" />
          </div>
          <div className="pt-3">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="" />
              <span className="text-gray-700">Automatisch kurzen</span>
            </label>
          </div>
        </div>
        <div className="flex gap-5 justify-between ">
          <p>Treffer je Seite</p>
          <p className="text-accentGreen">10</p>
          <p>20</p>
          <p>30</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 py-2">
        <div className="w-full lg:w-3/4">
          <p className="font-bold">Erweiterte Suche</p>
          <p>Schlusselbegriff</p>
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Search..."
              className="w-full py-2 pl-4 pr-10 border-2 border-black focus:outline-none"
            />
            <CiSearch className="absolute w-5 h-5 text-gray-500 right-3 top-2.5" />
          </div>
        </div>
        <div className="flex gap-5 justify-between ">
          <p>Treffer je Seite</p>
          <p className="text-accentGreen">10</p>
          <p>20</p>
          <p>30</p>
        </div>
      </div>

      <div className="flex gap-5 py-2">
        <div className="w-full lg:w-3/4">
          <p className="">Person</p>
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Search..."
              className="w-full py-2 pl-4 pr-10 border-2 border-black focus:outline-none"
            />
            <CiSearch className="absolute w-5 h-5 text-gray-500 right-3 top-2.5" />
          </div>
        </div>
      </div>

      <div className="flex gap-5 py-2">
        <div className="w-full lg:w-3/4">
          <p className="">Ort</p>
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Search..."
              className="w-full py-2 pl-4 pr-10 border-2 border-black focus:outline-none"
            />
            <CiSearch className="absolute w-5 h-5 text-gray-500 right-3 top-2.5" />
          </div>
        </div>
      </div>

      <div className="flex gap-5 py-2">
        <div className="w-full lg:w-3/4">
          <p className="">Technisches Medium</p>
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Search..."
              className="w-full py-2 pl-4 pr-10 border-2 border-black focus:outline-none"
            />
            <CiSearch className="absolute w-5 h-5 text-gray-500 right-3 top-2.5" />
          </div>
        </div>
      </div>

      <div className="flex gap-5 py-2">
        <div className="w-full lg:w-3/4">
          <p className="">Objekt</p>
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Search..."
              className="w-full py-2 pl-4 pr-10 border-2 border-black focus:outline-none"
            />
            <CiSearch className="absolute w-5 h-5 text-gray-500 right-3 top-2.5" />
          </div>
        </div>
      </div>

      <div className="flex gap-5 py-2">
        <div className="w-full lg:w-3/4">
          <p className="">Methodik</p>
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Search..."
              className="w-full py-2 pl-4 pr-10 border-2 border-black focus:outline-none"
            />
            <CiSearch className="absolute w-5 h-5 text-gray-500 right-3 top-2.5" />
          </div>
        </div>
      </div>

      <div className="flex gap-5 py-2">
        <div className="w-full lg:w-3/4">
          <p className="">Institution</p>
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Search..."
              className="w-full py-2 pl-4 pr-10 border-2 border-black focus:outline-none"
            />
            <CiSearch className="absolute w-5 h-5 text-gray-500 right-3 top-2.5" />
          </div>
        </div>
      </div>

      <div className="flex gap-5 py-2">
        <div className="w-full lg:w-3/4">
          <p className="">Publikationsjahr</p>
          <div className="relative w-full">
            <input
              type="search"
              placeholder="Search..."
              className="w-full py-2 pl-4 pr-10 border-2 border-black focus:outline-none"
            />
            <CiSearch className="absolute w-5 h-5 text-gray-500 right-3 top-2.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
