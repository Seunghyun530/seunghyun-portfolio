"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { newConcertData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function NewConcerts() {
    const { ref } = useSectionInView("Aktuelle");
  
    return (
    <section
    id="newconcerts"
    ref = {ref} 
    className = "scroll-mt-20 mb-28 sm:mb-40 sm:scroll-mt-28"
    >
        <SectionHeading>Aktuelle</SectionHeading>
        <VerticalTimeline lineColor="">
            {newConcertData.map((item, index) => (
                <React.Fragment key={index}>
                    <VerticalTimelineElement
                        contentStyle ={{
                            background: "#f3f4f6",
                            boxShadow: "none",
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            textAlign: "left",
                            padding: "1.3rem, 2rem",
                        }}
                        contentArrowStyle={{
                            borderRight: "0.4rem solid #9ca3af",
                        }}
                        date={item.date}
                        icon= {item.icon}
                        iconStyle={{
                            background: "white",
                            fontSize: "1.5rem",
                        }}
                    >
                        <h3 className="text-lg font-semibold capitalize">
                            {item.title}
                        </h3>
                        <p className="font-normal !mt-0"
                        >
                            {item.location}
                        </p>
                        <p className ="!mt-1 !font-normal text-gray-700">
                            {item.description}
                        </p>
                    </VerticalTimelineElement>
                </React.Fragment>
            ))}
    </VerticalTimeline>
    </section>
  )
}
