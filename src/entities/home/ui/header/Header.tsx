import React, {useEffect, useRef, useState} from 'react';

import cls from "./header.module.sass"
import classNames from "classnames";
import {createPortal} from "react-dom";

import {socialLinks} from "shared/const/links";
import {useLenis} from "lenis/dist/lenis-react";


const links = [
    {
        name: "Home",
        link: "home"
    },
    {
        name: "My skills",
        link: "mySkills"
    },
    {
        name: "My projects",
        link: "myProjects"
    }

]


export const Header = () => {



    const [active,setActive] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)


    const lenis = useLenis()


    const onActiveMenu = () => {
        setActive(state => !state)
    }

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el && lenis) {
            lenis.scrollTo(el);
            setActive(false)
        }
    };

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            if (ref.current && !ref.current.contains(target) && target.id !== "hamburger") {
                console.log("hello")
                setActive(false);
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [ref, setActive]);


    return (
        <>

            {createPortal(<a className={cls.gmail} href="mailto:monstrprogrammer@gmail.com">monstrprogrammer@gmail.com</a>,document.body)}

            {createPortal(
                <div id={"hamburger"} className={classNames(cls.hamburger, {[cls.active]: active})} onClick={onActiveMenu}>
                    <div className={cls.item}>
                        {/*<LineIcon/>*/}
                    </div>
                    <div className={cls.item}>
                        {/*<LineIcon/>*/}
                    </div>
                </div>,
                document.body
            )}

            {createPortal(
                <div className={classNames(cls.menu, {[cls.active]: active})}>
                    <div className={cls.menu__wrapper} ref={ref}>


                        <div className={cls.info}>
                            <h1>Menu</h1>
                            <ul>
                                {
                                    links.map(item => {
                                        return (
                                            <li onClick={() => scrollToSection(item.link)}>{item.name}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>


                        <div className={cls.socials}>
                            <h1>Menu</h1>


                            <div className={cls.socials__wrapper}>
                                {
                                    socialLinks.map((item,index) => {
                                        return (
                                            <a
                                                key={index}
                                                href={item.link}
                                                className={cls.item}
                                            >
                                                <item.icon/>
                                            </a>
                                        )
                                    })
                                }

                            </div>

                        </div>


                    </div>

                </div>,
                document.body
            )}
        </>

    );
};

