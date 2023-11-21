import React from 'react';
import classNames from 'classnames';
import { LinkNav } from '5_shared/ui/LinkNav/LinkNav';
import cls from './Nav.module.scss';

interface NavProps {
    className?: string;
}

export const Nav = (props: NavProps) => {
    const { className } = props;

    return (
        <nav className={classNames(cls.block, className)}>
            <LinkNav to="/list/">Разработка</LinkNav>
            <LinkNav to="/list12/">Фото-проекты</LinkNav>
            <LinkNav to="/list123/">Заметки</LinkNav>
        </nav>
    );
};
