import React, { useEffect, useRef } from 'react';

import cls from "./scrollProgress.module.sass"



const ScrollProgress = () => {
    const scrollBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollBarRef.current) {
                const { scrollHeight, clientHeight } = document.documentElement;
                const scrollableHeight = scrollHeight - clientHeight;
                const scrollY = window.scrollY;
                const scrollProgress = (scrollY / scrollableHeight) * 100;

                scrollBarRef.current.style.transform = `translateY(-${
                    100 - scrollProgress
                }%)`;
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={cls.scrollProgress}>
            <div
                className={cls.scrollBar}
                ref={scrollBarRef}
            ></div>
        </div>
    );
};

export default ScrollProgress;
