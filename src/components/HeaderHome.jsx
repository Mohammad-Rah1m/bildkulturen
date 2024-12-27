"use client";
import Link from "next/link";
import React from "react";
import MenuCard from "@/components/MenuCard";
import Popup from "@/components/Popup";
import { useDispatch } from "react-redux";
import { openPopup } from "@/store/features/popup/PopupSlice";

const HeaderSub = () => {
  const dispatch = useDispatch();
  const handleClick = (title,text) => {
    dispatch(openPopup({title,text})); // Trigger popup with text
  };

  return (
    <div className="header px-5 lg:px-10 xl:px-32 pt-3 pb-10">
      <div className="flex justify-between items-center">
        <div className="header-logo">
          <Link href="/">
            <h1 className="text-5xl">LOGO</h1>
          </Link>
        </div>
        <div className="flex gap-5">
          <MenuCard
            imagePath="/images/archive.svg"
            title="Welches Medium"
            text="Die Vielfalt der visuellen Medien ist in der Ökologie
als Wissenschaft sehr ausgeprägt, da die Disziplinierung
über Fachgrenzen verschiedener Natur- und
Gesellschaftswissenschaften hinweg stattfand.
Die Landschaftsfotografie spielte ebenso eine Rolle wie
traditionelle Zeichentechniken, grafische Darstellungen
dreidimensionale physische Modelle, Mikro- und
Makrofotografie, Fotogrammetrie, oder analoge und
digitale Satellitenbilder. Es entstanden spezifische
visuelle Signaturen, etwa die Tiefenordinate in der
aquatischen Ökologie oder die Kombinatorik"
          />
          <MenuCard
            imagePath="/images/archive.svg"
            title="Welche Bildkultur?
"
            text="In der Ökologie als Wissenschaft sind Bilder
von Anfang an von Bedeutung für den Erkenntnisprozess
und die Stabilisierung von Tatsachen. Die visuellen
Repräsentationen sind äußerst vielfältig und reichen
von Landschaftsfotografie über traditionelle
wissenschaftliche Zeichnungen, über Luftbild- und
Mikrofotografie, bis zu diagrammatischen Techniken."
          />
          <MenuCard
            imagePath="/images/archive.svg"
            title="Welches Netz?"
            text="Das Netz steht hier sowohl für das
informationstechnologische System, bestehend
aus verschiedenen Datentypen, wie das soziale
Netz von Akteuren in Wissenschaft und Gesellschaft.
Die Verknüpfung von Bild- und Literaturdaten,
die Vernetzung von Metadaten, historischen Daten
und bibliographischen Daten ist ein zentrales
Anliegen des Projektes."
          />
          <MenuCard
            imagePath="/images/archive.svg"
            title="Welche Ökologie?"
            text="Ökologie bezeichnet nicht nur eine
naturwissenschaftliche Disziplin, sondern wird
als Kompositum auch für ingenieurs- sozial- und
kulturschaftliche Disziplinen gebraucht, etwas
Ökotechnologie, politische Ökologie oder Kulturökologie
Von „ökologischem Denken ist auch die Rede im
wirtschaftlichen, politischen und Alltagshandeln. Als
ökologische oder Umweltbewegung werden, beginnend
den 1970er Jahren, Proteste und Aufklärungskampagne
gegen die zunehmend sicht- und messbar werdenden
Folgen der sogenannten Kohlenstoff-Gesellschaft und"
          />
        </div>
      </div>
      <div className="flex gap-10 justify-center mt-3">
        <Link href={"/archivsuche"}>
          <p className="text-2xl font-bold">Archivsuche</p>
        </Link>
        <Link href={"/projekt"}>
          <p className="text-2xl font-bold">Projekt</p>
        </Link>
        <Link href={"/"}>
          <p
            className="text-2xl font-bold"
            onClick={() => handleClick(
              "Wie funktioniert diese Seite?", 
              "Dieses Informationssystem ist als Forschungsinstrument konzipiert. Das zugrundeliegende Material kann über unterschiedlich orientierte Zugänge erschlossen werden: Bei der Einfachen Suche kommen Technologien zum Einsatz, wie sie auch in Suchmaschinen verwendet werden. Nähere Angaben zu den Trunkierungsmöglichkeiten, zur Verwendung logischer Operatoren, zu Gruppierungen usw. enthält der Hilfetext zur Einfachen Suche. Die Erweiterte Suche bietet die Möglichkeit, verschiedene Felder miteinander zu kombinieren und so gezielt eigene Filter zu definieren. Weitere Informationen enthalten die Ausführungen zur Erweiterten Suche. Über die Thesaurussuche ist ein systematisch-hierarchischer Zugang zu den Materialien möglich. Derzeit sind folgende Thesauren verfügbar."
            )}
          >
            Hilfe
          </p>
        </Link>
        <Link href={"/archivsuche"}>
          <p className="text-2xl font-bold">Kontakt</p>
        </Link>
      </div>
      <Popup />
    </div>
  );
};

export default HeaderSub;
