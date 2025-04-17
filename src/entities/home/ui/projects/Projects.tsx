import React, {useEffect, useRef, useState} from 'react';

import cls from "./projects.module.sass"
import {Col, Container} from "shared/ui/Grid";
import projectsData from "./projects.json"

import {ReactComponent as Arrow} from "shared/assets/icon/arrow.svg"


import img from "shared/assets/projects/classroom3.png"





import gsap from "gsap"
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger"
import Modal from "shared/ui/Modal/Modal";

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)


interface IProjectsItem {
    id: number,
    title: string,
    technologies: string[],
    year: string,
    desc: string,
    link: string,
    myRole: {
        title: string,
        options: string[]
    },
    images: string[]
}



export const Projects = () => {

    const data: {projects: IProjectsItem[]} = projectsData

    const textRefs = useRef<(HTMLDivElement | null)[]>([]);
    const container = useRef<HTMLDivElement| null>(null)
    const text1 = useRef<HTMLDivElement>(null);

    const [item,setItem] = useState<IProjectsItem | null>(null)
    const [active,setActive] = useState<boolean>(false)

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


    const onClickItem = (item: IProjectsItem) => {
        setItem(item)
        setActive(true)
    }


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
                                        onClick={() => onClickItem(item)}
                                    >
                                        <div className={cls.info}>
                                            <h1>{item.title}</h1>
                                            <p>
                                                {
                                                    item.technologies.map((elem, index) => {

                                                        return (
                                                            <React.Fragment key={index}>
                                                                <span>{elem}</span>
                                                                {index === item.technologies.length - 1 ? "" : "/"}
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

            <ProjectInfo active={active} setActive={setActive} item={item}/>

        </div>
    );
};



interface ProjectsInfoProps {
    item: IProjectsItem | null,
    active: boolean,
    setActive: (arg: boolean) => void
}

const ProjectInfo = ({item,active,setActive}: ProjectsInfoProps)  => {


    return (
        <Modal  active={active} setActive={setActive}>
            <div className={cls.projectsInfo}>

                <h1 className={cls.subtitle}>{item?.title}</h1>
                <div className={cls.year}>
                    <p>Year</p>
                    <p>{item?.year}</p>
                </div>


                <div className={cls.technologies}>
                    <p>Technologies</p>
                    <ul>
                        {
                            item?.technologies.map((tech,index) => {
                                return (
                                    <li key={index}>{tech + (index === item?.technologies.length - 1 ? "" : " /")}  </li>
                                )
                            })
                        }
                    </ul>
                </div>


                <div className={cls.desc}>
                    <p>Description</p>
                    <p>{item?.desc}</p>
                </div>


                <div className={cls.myRole}>

                    <p>My Role</p>
                    <p>{item?.myRole.title}</p>
                    <ul>
                        {
                            item?.myRole.options.map((item,index) => {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>


                {item?.link && <a href={item?.link}></a>}



                <div className={cls.images}>
                    {
                        item?.images.map((image,index) => {

                            const img = require(`shared/assets/projects/${image}`)

                            return (
                                <a target={"_blank"} href={img} className={cls.image} key={index}>
                                    <img src={img} alt={item?.title}/>
                                </a>
                            )
                        })
                    }

                </div>



            </div>
        </Modal>
    )
}

