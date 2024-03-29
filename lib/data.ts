
import React from "react";
import { GiClarinet  } from "react-icons/gi";
import photo1 from "@/public/ellenImages/1.png";
import photo2 from "@/public/ellenImages/2.png";
import photo3 from "@/public/ellenImages/3.png";
import photo4 from "@/public/ellenImages/4.png";
import photo5 from "@/public/ellenImages/5.png";

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
    {
        title: "Bad Reichenhaller Philharmoniker",
        location: "Taufkirchen, Köglweg 5, 82024 ",
        description: "Abgesagt",
        icon: React.createElement(GiClarinet),
        date: "Sam. 06.01.24 &  Fri.12.01.24",
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

export const mediaData = [
    {
        image:photo1,
    },
    {
        image:photo4,
    },
    {
        image:photo3,
    },
    {
        image:photo5,
    },
    {
        image:photo2,
    },
    
] as const;