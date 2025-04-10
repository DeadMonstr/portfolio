import React, {useRef} from 'react';

import cls from "./social.module.sass"
import {Col, Container} from "shared/ui/Grid";
import {socialLinks} from "shared/const/links";

import gsap from "gsap"
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)
const Social = () => {

    const textRefs = useRef<(HTMLElement   | null)[]>([]);
    const text1 = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLDivElement>(null)

    useGSAP(() => {


        let elem1 = gsap.timeline({
            scrollTrigger: {
                trigger: text1.current,
                start: "top 90%",
                end: "bottom 60%",
                scrub: 1,
            }
        })
        elem1.fromTo(
            text1.current,
            { y: -60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 2,
                // ease: "power4.out",
            }
        );
    },[])


    useGSAP(() => {
        let elem1 = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 90%",
                end: "bottom-=200 100%",
                scrub: 0.5,
                // toggleActions: "resume pause resume pause",
            }
        })
        elem1.from(textRefs.current, {
            opacity: 0,
            y: 40,
            stagger: 0.4,
            // ease: "power4.out",
        });
    },{scope: container})
    return (
        <div className={cls.socials} ref={container}>

            <Container>
                <Col span={12}>
                    <h1 ref={text1} className={cls.title}>My Socials</h1>
                    <div className={cls.wrapper}>
                        {
                            socialLinks.map((item,index) => {
                                return (
                                    <a
                                        key={index}
                                        ref={(el) => { textRefs.current[index] = el }}
                                        href={item.link}
                                        className={cls.item}
                                    >

                                        <item.icon/>
                                    </a>
                                )
                            })
                        }
                    </div>
                </Col>
            </Container>



        </div>
    );
};

export default Social;