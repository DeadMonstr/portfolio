import React, {useEffect, useRef, useState} from 'react';

import cls from "./projects.module.sass"
import {Col, Container} from "shared/ui/Grid";
import projectsData from "./projects.json"

import {ReactComponent as Arrow} from "shared/assets/icon/arrow.svg"




import gsap from "gsap"
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export const Projects = () => {

    const data = projectsData

    const textRefs = useRef<(HTMLDivElement | null)[]>([]);
    const container = useRef<HTMLDivElement| null>(null)
    const text1 = useRef<HTMLDivElement>(null);


    useGSAP(() => {
        let elem = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 90%",
                end: "bottom 60%",
                scrub: 1,
                toggleActions: "resume pause resume pause",
            }
        })
        elem.fromTo(
            textRefs.current,
            { y: 80, opacity: 0, },
            {
                y: 0,
                opacity: 1,
                duration: 2,
                stagger: 0.5
                // ease: "power4.out",
            }
        );
    },[])

    useGSAP(() => {


        let elem = gsap.timeline({
            scrollTrigger: {
                trigger: text1.current,
                start: "top 90%",
                end: "bottom 60%",
                scrub: 1,
                toggleActions: "resume pause resume pause",
            }
        })
        elem.fromTo(
            text1.current,
            {y: -60, opacity: 0},
            {
                y: 0,
                opacity: 1,
                duration: 2,
                // ease: "power4.out",
            }
        );

    }, {scope: container})



    return (
        <div className={cls.projects} id={"myProjects"} ref={container}>
            <Container>
                <Col span={12}>
                    <h1 className={cls.title} ref={text1}>Projects</h1>
                    <div className={cls.wrapper}>
                        {
                            data.projects.map((item,index) => {
                                return (
                                    <div
                                        className={cls.item}
                                        key={item.id}
                                        ref={(el) => { textRefs.current[index] = el }}
                                    >
                                        <div className={cls.info}>
                                            <h1>{item.title}</h1>
                                            <p>
                                                {
                                                    item.technologies.map((elem, index) => {

                                                        return (
                                                            <React.Fragment key={index}>
                                                                <span>{elem}</span>
                                                                {index === item.technologies.length - 1 ? "/" : ""}
                                                            </React.Fragment>
                                                        )
                                                    })
                                                }
                                            </p>
                                        </div>
                                        <Arrow className={cls.arrow}/>
                                    </div>
                                )
                            })
                        }

                    </div>
                </Col>
            </Container>

        </div>
    );
};

