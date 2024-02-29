import React, { memo } from 'react';
import classNames from 'classnames';
import { LinkNav } from '5_shared/ui/LinkNav/LinkNav';
import { RouterPath } from '5_shared/config/router/routerConfig';
import cls from './Nav.module.scss';
import {ContentKeyType} from "5_shared/types/CommonTypes";

interface NavProps {
    className?: string;
}

export const Nav = memo((props: NavProps) => {
    const { className } = props;

    return (
        <nav className={classNames(cls.block, className)}>
            <LinkNav linkKey={ContentKeyType.DEV} to={RouterPath.dev}>Разработка</LinkNav>
            <LinkNav linkKey={ContentKeyType.PHOTO} to={RouterPath.photo}>Фото-проекты</LinkNav>
            <LinkNav linkKey={ContentKeyType.POST} to={RouterPath.posts}>Заметки</LinkNav>
        </nav>
    );
});
