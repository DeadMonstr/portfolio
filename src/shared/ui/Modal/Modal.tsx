import React, {JSX, useEffect} from 'react';

import cls from "./modal.module.sass"
import classNames from "classnames";
import { createPortal } from 'react-dom';
import {useLenis} from "lenis/dist/lenis-react";


interface IModalProps {
    children: JSX.Element | JSX.Element[],
    active: boolean,
    setActive: (arg: boolean) => void,
    extraClass?: string,
}


const Modal = ({children,active,setActive}:IModalProps) => {


    const lenis = useLenis()

    useEffect(() => {
        if (!lenis) return;

        if (active) {
            lenis.stop()
        } else {
            lenis.start()
        }
    },[lenis, active])


    const onClick = (event: React.MouseEvent<HTMLElement>): void => {
        const target = event.target as HTMLElement
        if (target && target.classList) {
            if (target.className.includes(cls.modal) ) {
                setActive(false);
            }
        }
    };



    return createPortal(
        <div className={classNames(cls.modal, {[cls.active]: active})} onClick={onClick}>
            <div id={"modal"} className={cls.box}>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;