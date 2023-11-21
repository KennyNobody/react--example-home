import classNames from 'classnames';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { ReactNode } from 'react';
import cls from './LinkNav.module.scss';

interface LinkAppProps extends NavLinkProps {
    className?: string;
    children: ReactNode;
}

export const LinkNav = (props: LinkAppProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <NavLink
            {...otherProps}
            className={({ isActive }) => classNames([

                cls.block,
                isActive ? [cls['block--active']] : '',
                className,
            ].join(' '))}
        >
            { children }
        </NavLink>
    );
};
