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
            quality={75}
            className="
            transition rounded-s flex justify-center group-hover:scale-[0.95] shadow-2xl 
            absolute w-[24rem] h-[24rem] rounded-lg"
            />
        </section>
        </motion.div>
    );
}
