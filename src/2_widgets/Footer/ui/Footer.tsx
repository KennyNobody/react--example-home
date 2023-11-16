import classNames from 'classnames';
import cls from './Footer.module.scss';
import React from "react";
import {useTheme} from "5_shared/libs/hooks/useTheme";

interface FooterProps {
    className?: string
}

export const Footer = (props: FooterProps) => {
    const { className } = props;
    const {toggleTheme} = useTheme();

    return (
        <div className={classNames(cls.block, className)}>
            Подвал
            <button onClick={toggleTheme}>
                Сменить тему
            </button>
        </div>
    );
};
