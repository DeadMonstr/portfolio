import React from 'react';

import cls from "./Preloader.module.sass"
import {createPortal} from "react-dom";

import {ReactComponent as Arrow} from "shared/assets/icon/arrow-loader.svg"

import gsap from "gsap"
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger"
import classNames from "classnames";

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)


const Preloader = () => {


    useGSAP(() => {
        const tl = gsap.timeline({

        });

        gsap.fromTo(
            "#preloader",
            {  opacity: 1, visibility: "visible" },
            {

                opacity: 0,
                delay: 4,
                duration: 1,
                // visibility: "hidden"
                ease: "power4.out",
            }
        );


        gsap.to("#preloader",{
            delay: 4,
            visibility: "hidden"
        })


        tl.to("#arrows",{
            rotate: 180,
            duration: 1,
            repeat: 1
        })


        tl.to("#arrow2",{
            x: 1000,
            duration: 1,
            // repeat: 2
        })


        tl.to("#arrow1",{
            x: -1000,
            duration: 1,
            // repeat: 2
        },'<')

        tl.to("#leftLoader",{
            x: "-100%",
            duration: 2,
            // repeat: 2
        },'<')

        tl.to("#rightLoader",{
            x: "100%",
            duration: 2,
            // repeat: 2
        },'<')


    },[])




    return (
        createPortal(
            <div id={"preloader"} className={cls.intro}>
                <div className={cls.arrows} id={"arrows"}>
                    <Arrow  className={classNames(cls.arrow,cls.arrow1)} id={"arrow1"}/>
                    {/*<span className={cls.line}>/</span>*/}
                    <Arrow className={classNames(cls.arrow,cls.arrow2)} id={"arrow2"}/>
                </div>

                <div className={cls.left} id={"leftLoader"}></div>
                <div className={cls.right}  id={"rightLoader"}></div>

            </div>
            ,document.body
        )

    );
};

export default Preloader;