"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'

export default function Media() {
    const {ref} = useSectionInView("Medien")
  return (
    <section 
    id="media"
    ref = {ref}
    className="scroll-mt-20 sm:scroll-mt-28"
    >
        <SectionHeading>Medien</SectionHeading>
    </section>
  )
}
