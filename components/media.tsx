"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'

export default function Media() {
    const {ref} = useSectionInView("Media")
  return (
    <section 
    id="media"
    ref = {ref}
    >
        <SectionHeading>Media</SectionHeading>
    </section>
  )
}
