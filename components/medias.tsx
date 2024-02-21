"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import {motion} from "framer-motion";
import { mediaData } from '@/lib/data';
import Media from './media';

export default function Medias() {
    const {ref} = useSectionInView("Medien")
    return (
        <motion.section
        ref = {ref}
        className="scroll-mt-28 mb-28"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition = {{ delay: 0.2 }}
        id="media"
        >
            <SectionHeading>
                Medien
            </SectionHeading>

            <div className="flex flex-wrap justify-center w-full gap-x-0 text-lg text-gray-800 gap-y-8
            sm:w-full
            lg:w-[60rem] 
            xl:w-[80rem]">
                {
                    mediaData.map((media, index) => (
                        <React.Fragment key={index}>
                            <Media {...media} />
                        </React.Fragment>
                    ))
                }
            </div>
    
        </motion.section>
        );
}
