import React, { memo } from 'react';
import classNames from 'classnames';
import { LinkNav } from '5_shared/ui/LinkNav/LinkNav';
import { RouterPath } from '5_shared/config/router/routerConfig';
import cls from './Nav.module.scss';

interface NavProps {
    className?: string;
}

export const Nav = memo((props: NavProps) => {
    const { className } = props;

    return (
        <nav className={classNames(cls.block, className)}>
            <LinkNav to={RouterPath.dev}>Разработка</LinkNav>
            <LinkNav to={RouterPath.photo}>Фото-проекты</LinkNav>
            <LinkNav to={RouterPath.posts}>Заметки</LinkNav>
        </nav>
    );
});
