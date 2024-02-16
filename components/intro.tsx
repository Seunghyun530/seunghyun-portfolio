"use client";

import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsInstagram} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const {ref} = useSectionInView("Home",0.5);
    const { setActiveSection, setTimeOfLastClick }  = useActiveSectionContext();
    
    return (
    <section 
    ref ={ref}
    className ="mb-28 max-w-[50rem] text-center scroll-mt-[100rem]"
    id="home">
        <div className = "flex items-center justify-center sm:mb-0">
            <div className= "relative">
                <motion.div
                    initial={{opacity: 0, scale:0}}
                    animate={{opacity: 1, scale:1}}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                <Image 
                src="/infoImages/EllenProfile.png"
                alt="Ellen portrait"
                width = "192"
                height= "192"
                quality="100"
                priority={true}
                className="mt-8 w-[20rem] h-[20rem] rounded-full object-cover border-[0.1rem] border-black shadow-xl sm:w-[25rem] sm:h-[25rem] sm:mt-0 "
                />
                </motion.div>
            </div>
        </div>

        <motion.h1
        className="mb-16 mt-16 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
            <span className="font-bold">Seunghyun Ellen Ko</span>
        </motion.h1>

        <motion.div 
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{opacity: 0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{
            delay: 0.1,
        }}
        >
            <Link href="#contact"
            className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
            onClick={()=> {
                setActiveSection("Kontakt");
                setTimeOfLastClick(Date.now());
            }}
            >
                Kontakt
                <BsArrowRight 
                className ="transition opacity-70 group-hover:translate-x-2"/>
            </Link>

            <a 
            className="flex items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 borderBlack"
            href="/Lebenslauf-Seunghyun_Ellen_Ko.pdf" 
            download={true}
            >
                Vita 
                <HiDownload 
                className= "opacity-60 group-hover:translate-y-1 translation"/>
            </a>

            <div className= "flex items-stretch gap-2">
            <a
            className="flex items-center gap-2 p-4 text-gray-700 transition bg-white rounded-full cursor-pointer focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 borderBlack"
            href="https://www.instagram.com/hyun.ellen/" target="_blank"
            >
                <BsInstagram />
            </a>

            </div>

            
        </motion.div>
    </section>
  );
}
