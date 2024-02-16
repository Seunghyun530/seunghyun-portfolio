
import React from "react";
import { GiClarinet  } from "react-icons/gi";
import { LuGraduationCap } from "react-icons/lu";

import clarinet from "@/public/Clarinet.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Biographie",
    hash: "#biography",
  },
  {
    name: "Aktuelle",
    hash: "#newconcerts",
  },
  {
    name: "Vergangen",
    hash: "#oldconcerts",
  },
  {
    name: "Medien",
    hash: "#media",
  },
  {
    name: "Kontakt",
    hash: "#contact",
  }
] as const;

export const oldConcertsData = [
    {
        title: "Studienkonzert",
        location: "Bösendorfersaal",
        description: "Bernstein- Clarinet Sonata",
        icon: React.createElement(GiClarinet),
        date: "Sam. 27.01- 15:30 Uhr",
    },
    {
        title: "Kammermusik Konzert",
        location: "Wiener Saal, Mozarteum",
        description: "Es erwartet Sie ein beeindruckendes Konzert mit Werken von P. Hindemith, darunter \"Die junge Magd Op. 23/2 - Sechs Gedichte von Georg Trakl\", sowie Stücken von M. Ravel, wie \"Trois poèmes de Stéphane Mallarmé\"",
        icon: React.createElement(GiClarinet),
        date: "Mon. 22. 01.22- 18 Uhr",
    },
] as const;

export const newConcertData = [
    {
        title: "Studienkonzert",
        location: "Wiener Saal, Mozarteum",
        description: "",
        icon: React.createElement(GiClarinet),
        date: "Di. 12.03.12- 18 Uhr",
    },
    {
        title: "Philharmonie Salzburg",
        location: "Carmen Würth Forum, Am Forumsplatz 1, 74653 Künzelsau",
        description: "Die bevorstehende Aufführung verspricht eine faszinierende Mischung aus musikalischen Meisterwerken, darunter Mozarts majestätische Jupiter-Sinfonie sowie mitreißende Stücke von Monteverdi und Bizet.",
        icon: React.createElement(GiClarinet),
        date: "Do. 21.03.24-  9 Uhr/ 11:30 Uhr/ 14 Uhr",
    },
    {
        title: "Studienkonzert",
        location: "Wiener Saal, Mozarteum",
        description: "",
        icon: React.createElement(GiClarinet),
        date: "Di.25.04.24- 20 Uhr",
    },
] as const;