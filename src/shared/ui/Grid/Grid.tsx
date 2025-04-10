import React from 'react';

import cls from "shared/ui/Grid/grid.module.sass"
import classNames from "classnames";


type GridProps = {
    children: React.ReactNode;
    className?: string
};

export const Container = ({ children ,className}: GridProps) => {
    return <div className={classNames(cls.container, className)}>{children}</div>;
};

type ColProps = {
    span: number;        // default (desktop)
    tablet?: number;     // tablet screen size
    mobile?: number;     // mobile screen size
    children: React.ReactNode;
    className?: string;

};

export const Col = ({span, tablet, mobile, children, className}: ColProps) => {
    return <div
        className={classNames(
            cls[`col-${span}`],
            tablet && cls[`col-${tablet}-tablet`],
            mobile && cls[`col-${mobile}-mobile`],
            className
        )}
    >
        {children}
    </div>;
};

