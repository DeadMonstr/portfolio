import React, {useEffect, useRef} from 'react';
import cls from "./skills.module.sass"
import skillsData from "./SkillData"
import {Col, Container} from "shared/ui/Grid";


import gsap from "gsap"
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)


interface SkillsType {
    title: string,
    img: string
}

export const Skills = () => {

    const data: SkillsType[] = skillsData
    const textRefs = useRef<(HTMLDivElement | null)[]>([]);
    const text1 = useRef<HTMLDivElement>(null);
    const container = useRef<HTMLDivElement>(null)


    useGSAP(() => {
        let elem1 = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 90%",
                end: "bottom 80%",
                scrub: 0.5,
                // toggleActions: "resume pause resume pause",
            }
        })
        elem1.from(textRefs.current, {
            opacity: 0,
            y: 40,
            ease: 'none',
            stagger: 0.4,
            // ease: "power4.out",
        });
    },{scope: container})

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
        <div className={cls.skills} id={"mySkills"} ref={container}>
            <Container>
                <Col span={12}>
                    <h1 ref={text1} className={cls.title}>My Skills</h1>
                    <div className={cls.wrapper}>
                        {
                            data.map((item, index) =>
                                <div
                                    key={index}
                                    ref={(el) => {
                                        textRefs.current[index] = el
                                    }}
                                    className={cls.item}
                                >
                                    <img src={item.img} alt="img"/>
                                    <h1>{item.title}</h1>
                                </div>
                            )
                        }
                    </div>
                </Col>
            </Container>


        </div>
    );
};

