"use client"

import { useRef } from "react";
import { mediaData } from "@/lib/data";
import Image from 'next/image'
import { motion } from "framer-motion"

type MediaProps = typeof mediaData[number];

export default function Media({
    image,
}: MediaProps) 
{
    const ref = useRef<HTMLDivElement>(null);
    
    return (
        <motion.div
        ref={ref}
        className="mx-[1rem] group mb-0"
        >
            <section 
        className="bg-white border borderBlack overflow-hidden transition rounded-lg flex flex-col items-center w-[24rem] h-[24rem]"
        >
            <Image 
            src={image} 
            alt="Image" 
            quality={95}
            className="
            transition rounded-s flex justify-center group-hover:scale-[1.2] shadow-2xl 
            absolute m-5 w-[3rem] mr-[18rem]
            sm:relative sm:w-[4rem] sm:rounded-xl sm:mt-8 sm:mb-4 sm:mr-5"
            />
        </section>
        </motion.div>
    );
}
