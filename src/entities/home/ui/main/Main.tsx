import React from 'react';

import cls from "./main.module.sass"
import {Container, Col} from "shared/ui/Grid";

import gsap from "gsap"
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export const Main = () => {
    const text1 = React.useRef<HTMLDivElement>(null)
    const text2 = React.useRef<HTMLDivElement>(null)
    const text3 = React.useRef<HTMLDivElement>(null)
    const down = React.useRef<HTMLDivElement>(null)



    useGSAP(() => {
        gsap.to(text1.current, {
            scrollTrigger: {
                trigger: text1.current,
                // pin: true,
                start: "top center-=200",
                // end: "100px bottom",
                // end: "bottom 20px",
                scrub: true,
                // toggleActions: "restart none none reverse",
            },
            // scale: 0.9,
            y: -60,
            opacity: 0.4,
            duration: 2
        })

        gsap.to(text2.current, {
            scrollTrigger: {
                trigger: text2.current,
                start: "top center-=200",
                // end: "bottom top",
                // end: "bottom 20px",
                scrub: true,
                // toggleActions: "restart none none reverse",
            },
            // scale: 0.9,
            y: -50,
            opacity: 0.4,
            duration: 2
        })
        gsap.to(text3.current, {
            scrollTrigger: {
                trigger: text3.current,
                start: "top center-=200",
                // end: "bottom top",
                // end: "bottom 20px",
                scrub: true,
                // toggleActions: "restart none none reverse",
            },
            // scale: 0.9,
            y: -20,
            opacity: 0.4,
            duration: 2
        })


        gsap.to(down.current, {
            stagger: 0.1,
            // scale: 0.9,
            y: 200,
            opacity: 0.4,
            duration: 6,
            // delay: 6,
            repeat: -1
        })
    },[])


    return (
        <div className={cls.main} id={"home"}>
            <Container>
                <Col span={6} tablet={8} mobile={12}>
                    <div ref={text1} className={cls.title}>
                        <h1>FRONTEND</h1>
                        <h1>DEVELOPER</h1>
                    </div>
                    <p ref={text2} className={cls.desc}>Hi there! I’m <span>Ulug’bek</span>. A creative Frontend Developer with 4+ years of experience in building
                        high-performance, scalable, and responsive web solutions.</p>
                    <div ref={text3} className={cls.exp}>
                        <div className={cls.item}>
                            <h1>4+</h1>
                            <p>Years of experience</p>
                        </div>
                        <div className={cls.item}>
                            <h1>5+</h1>
                            <p>Completed projects</p>
                        </div>
                    </div>
                </Col>
                <Col span={6} tablet={4} mobile={12}>
                    <div ref={down} className={cls.scrollDown}>
                        <svg  viewBox="0 0 227 115" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector 5"
                                  d="M4 3.05012H5.04535H34.7063L113.5 79L192.873 3.05012L223 2L113.5 112L4 3.05012Z"
                                  fill="#DAFFFB" fillOpacity="0.6" stroke="#DAFFFB" strokeOpacity="0.6"
                                  strokeWidth="3" className={cls.svgElem1}></path>
                        </svg>
                        <svg  viewBox="0 0 227 115" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector 5"
                                  d="M4 3.05012H5.04535H34.7063L113.5 79L192.873 3.05012L223 2L113.5 112L4 3.05012Z"
                                  fill="#DAFFFB" fillOpacity="0.6" stroke="#DAFFFB" strokeOpacity="0.6"
                                  strokeWidth="3" className={cls.svgElem1}></path>
                        </svg>
                    </div>
                </Col>
            </Container>
        </div>
    );
};

