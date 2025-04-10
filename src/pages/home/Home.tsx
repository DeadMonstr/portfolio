import React, {useEffect, useRef, useState} from 'react';

import cls from "./home.module.sass"
import 'lenis/dist/lenis.css';
import {About, Header, Main, Projects, Skills} from "entities/home";

import Social from "entities/home/ui/social/Social";
import Preloader from "shared/ui/Preloader/Preloader";
import ReactLenis, {useLenis} from "lenis/dist/lenis-react";

import gsap from "gsap"
import ScrollProgress from "shared/ui/ScrollProgress/ScrollProgress";
import {clearTimeout} from "timers";



const Home = () => {
    const lenisRef = useRef()
    const lenis = useLenis()

    const [preloader,setPreloader] = useState(true)

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000)

        }


        gsap.ticker.add(update)

        gsap.ticker.lagSmoothing(0)

        return () => gsap.ticker.remove(update)
    }, [])



    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, {immediate: true})

            lenis.stop()
            setTimeout(() => {
                lenis.start()
            }, 2000)

        }
    },[lenis])








    return (
        <ReactLenis
            root
            options={{
                autoRaf: false,
                // lerp: 0.0010,
                lerp: 1,
                duration: 1.8,
                syncTouch: true,
                touchMultiplier: 2,
            }}

            ref={lenisRef}
        >
            <div  className={cls.home}>
                <Preloader/>
                <Header/>
                <Main/>
                <About/>
                <Skills/>
                <Projects/>
                <Social/>

                <ScrollProgress/>
            {/**/}

            </div>
        </ReactLenis>

    );
};


export default Home;