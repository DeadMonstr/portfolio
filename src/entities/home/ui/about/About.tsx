import React, {useEffect} from 'react';

import cls from "./about.module.sass"
import {Col, Container} from "shared/ui/Grid";


import gsap from "gsap"
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export const About = () => {
    const text = React.useRef<HTMLDivElement>(null)
    const container = React.useRef<HTMLDivElement>(null)


    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 1,
                },
            });

            tl.from(text.current, {
                y: 150,
                opacity: 0,
                duration: 2,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(text.current, {
                y: -150,
                opacity: 0,
                duration: 2,
            });
        },
        { scope: container },
    );




    // useGSAP(() => {
    //     gsap.timeline({
    //         scrollTrigger: {
    //             trigger: text1.current,
    //             start: "top 90%",
    //             end: "bottom+=200 60%",
    //             scrub: 1,
    //             toggleActions: "resume pause resume pause",
    //             onEnter: () => {
    //                 gsap.fromTo(
    //                     text1.current,
    //                     { y: 80, opacity: 0 },
    //                     { y: 0, opacity: 1, duration: 1.2,  }
    //                 );
    //             },
    //             onLeave: () => {
    //                 gsap.to(text1.current, {
    //                     y: -50,
    //                     opacity: 0,
    //                     duration: 1,
    //
    //                 });
    //             },
    //             onEnterBack: () => {
    //                 gsap.fromTo(
    //                     text1.current,
    //                     { y: -50, opacity: 0 },
    //                     { y: 0, opacity: 1, duration: 1.2,  }
    //                 );
    //             },
    //             onLeaveBack: () => {
    //                 gsap.to(text1.current, {
    //                     y: 80,
    //                     opacity: 0,
    //                     duration: 1,
    //
    //                 });
    //             },
    //
    //         }
    //     })
    //
    // },[])



    return (
        <div id={"about"} className={cls.about} ref={container}>
            <Container>
                <Col span={12}>
                    <p ref={text}>
                        I create high-performance, scalable, and user-focused web applications with a strong emphasis on speed,
                        accessibility, and intuitive UX/UI design. By balancing aesthetics and functionality, I ensure seamless
                        interactions and engaging digital experiences.
                    </p>
                </Col>
            </Container>

        </div>
    );
};

