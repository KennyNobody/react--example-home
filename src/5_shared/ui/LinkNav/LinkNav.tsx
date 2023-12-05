import classNames from 'classnames';
import { memo, ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import cls from './LinkNav.module.scss';

interface LinkAppProps extends NavLinkProps {
    className?: string;
    children: ReactNode;
}

export const LinkNav = memo((props: LinkAppProps) => {
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
});
