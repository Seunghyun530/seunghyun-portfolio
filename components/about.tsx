"use client"

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView("Biography",0.5);

    return (
    <motion.section
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-20"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition = {{ delay: 0.175 }}
    id="biography"
    >
        <SectionHeading>
            Biography
        </SectionHeading>
        <p
        className="mb-6"
        >
            Seunghyun Ellen Ko wurde am 30. Mai 2001 in Südkorea geboren und erhielt im Alter von 8 Jahren ihren ersten Klarinettenunterricht. Derzeit studiert sie Musik an der Folkwang Universität der Künste in Essen, Deutschland, bei Professorin Nicola Jürgensen. Gleichzeitig nimmt sie am Erasmus-Programm am Mozarteum in Salzburg, Österreich, teil, wo sie von Professor Andreas Schablas betreut wird.
        </p>
        <p className = "mb-6">
            Ergänzt wird ihre Ausbildung durch die Teilnahme an renommierten Akademien wie der Sommerakademie am San Francisco Conservatory, bereits mit 12 Jahren, und an Meisterkursen bei Martin Spangenberg, Ralph Manno, Kilian Herold, Sebastian Manz, Francois Benda, Yehuda Gilad, Roman Guyot und Pascal Moragues.
        </p>
        <p className = "mb-6">
            Seit ihrer Kindheit ist sie auch als Solistin aktiv. Bereits im Alter von 13 Jahren gewann sie den 2. Preis beim US Open Music Competition. Darüber hinaus hat sie an weiteren Wettbewerben wie dem Virtuoso International Competition teilgenommen und dort beeindruckende Leistungen gezeigt. Ihre Fähigkeiten als Solistin wurden durch ein Solo-Rezital, das von der Shinhan-Stiftung gesponsert wurde, gefördert. Während ihres Bachelorstudiums erhielt sie außerdem Unterstützung durch das Deutschlandstipendium, das sie zwei Jahre lang begleitete.
        </p>
        <p>
            Sie ist auch aktiv als Orchester- und Kammermusikerin tätig. Derzeit spielt sie aktiv als Substitutin in der Philharmonie Salzburg und hat mit dem Mannheimer Streichquartett das Brahms Klarinettenquintett aufgeführt, zusammen mit Konzertmeisterinnen und Solospielern aus den Essener und Dortmunder Philharmonikern. Zudem hat sie kammermusikalische Auftritte in renommierten Konzertsälen wie der Berliner Philharmonie, dem Kammermusiksaal in München, dem Kulturpalast in Dresden und der Laeiszhalle in Hamburg.
        </p>

    </motion.section>
    );
}
