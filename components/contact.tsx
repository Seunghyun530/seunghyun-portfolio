"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const {ref} = useSectionInView("Kontakt");

  return (
    <motion.section
    ref ={ ref }
    id="contact"
    className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    initial={{ opacity: 0,}}
    whileInView={{ opacity: 1,}}
    transition={{
        duration: 1.5,
    }}
    viewport={{
        once: true,
    }}
    >
        <SectionHeading>Kontakt</SectionHeading>

        <p className="-mt-5 text-gray-700">
            Schreiben Sie mir bitte eine E-Mail an{" "}
            <a className = "underline" href="mailto:seunghyunko530@gmail.com">seunghyunko530@gmail.com
            </a>
            {" "}oder nutzen Sie dieses Formular.</p>
            
            <form className="flex flex-col mt-10"
            action={async (formData) => {
                const { data, error } = await sendEmail(formData);
                if(error)
                {
                    toast.error(error);
                    return;
                }

                toast.success("E-Mail erfolgreich versendet!");
            }}
            >
                <input 
                className="px-4 rounded-lg h-14 borderBlack" 
                name="senderEmail"
                type="email" 
                required
                maxLength={500}
                placeholder="Ihre E-Mail..." 
                />
                <textarea 
                name="message"
                className="p-4 my-3 rounded-lg h-52 borderBlack" 
                required
                maxLength={1000}
                placeholder="Ihre Nachricht..."
                />

                <SubmitBtn />
            </form>
    </motion.section>
  )
}
