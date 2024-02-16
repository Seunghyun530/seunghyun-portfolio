
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Biography",
    hash: "#biography",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Concerts",
    hash: "#concerts",
  },
  {
    name: "Media",
    hash: "#media",
  },
  {
    name: "Contact",
    hash: "#contact",
  }
] as const;

export const experiencesData = [
  {
    title: "Playable Ads Developer",
    company: "JustDice",
    location: "Hamburg, Germany",
    description: "Developing playable ads for apps and mobile games using Unity, LunaLabs, and C#. Developing automation tools/ extensions for Unity using C#. Developing plugins for Adobe Apps. using ExtendScript, JavaScript, HTML, CSS and UXP. Designing 3D& 2D assets for marketing campaigns by using Blender, Spline and Figma.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr. 2023 - Present",
  },
  {
    title: "Technical Customer Support Specialist",
    company: "Ekmob SFA",
    location: "Istanbul, Turkey",
    description:
      "Addressing customer-reported problems and resolving software bugs. Communicating technical aspects of our software apps and to customers.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep. 2021 - Oct. 2021",
  },
  {
    title: "Project Engineer - Intern",
    company: "TUPRAS",
    location: "Kocaeli, Turkey",
    description:
      "Led 'susTRAINable' project at TUPRAS, targeting net-zero railway emissions by 2050, aligning with 6 UN Sustainable Development Goals. Moreover, 'TogetHER' project focused on improving women's lives in the refinery and energy sectors, including mentorship programs for STEM-inclined women.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug. 2021 - Sep. 2021",
  },
  {
    title: "Game Developer",
    company: "GEFEASOFT",
    location: "Mugla, Turkey",
    description:
      "Developed WebGL & Mobile based serious games and VR-based Anatomy Atlas in the healthcare industry by using Unity and C#.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar. 2021 - Jun. 2021",
  },
  {
    title: "Software Engineer - Intern",
    company: "Avocuda",
    location: "Istanbul, Turkey",
    description:
      "Contributed to mobile application development in the development team, utilizing React-Native and Adobe XD.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb. 2020 - Jun. 2020",
  },
  {
    title: "Electrical Design Engineer - Intern",
    company: "Tempa Pano",
    location: "Kocaeli, Turkey",
    description:
      "Interned as a test and design engineer in an electrical enclosure-producing factory. Engaged in projects utilizing EPLAN and AutoCAD, including electrical enclosure projects such as Rayyan Stadium in Qatar and the International Reception Center of Ashgabat in Turkmenistan.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug. 2019 - Sep. 2019",
  },
] as const;

export const educationData = [
    {
        title: "Bachelor Musik",
        university: "Folkwang Universität der Künste",
        location: "Essen, Deutschland",
        description: "After completing the English preparatory year, I pursued software-related courses in computer science and graduated with a GPA of 3.01/4.0. During my academic journey, I had the opportunity to work as an intern in the Artificial Intelligence and Robotics Lab.. Additionally, I took an active role in developing the website for the university's Artificial Intelligence and Robotics Lab. course",
        icon: React.createElement(LuGraduationCap),
        date: "Okt. 2020 - Present",
    }
] as const;