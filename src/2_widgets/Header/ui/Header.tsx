import classNames from 'classnames';
import cls from './Header.module.scss';
import {Container} from "5_shared/ui/Container/Container";
import {Link} from "react-router-dom";
import React from "react";

interface HeaderProps {
    className?: string
}

export const Header = (props: HeaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <Container>
                <Link to={'/'}>Главная</Link>
                <Link to={'/list/'}>Список</Link>
            </Container>
        </div>
    );
};
