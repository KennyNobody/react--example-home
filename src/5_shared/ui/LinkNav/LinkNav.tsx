import classNames from 'classnames';
import {
    memo,
    useState,
    ReactNode,
    useEffect,
} from 'react';
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom';
import { ContentKeyType } from '5_shared/types/CommonTypes';
import cls from './LinkNav.module.scss';

interface LinkAppProps extends NavLinkProps {
    className?: string;
    children: ReactNode;
    linkKey: ContentKeyType;
}

export const LinkNav = memo((props: LinkAppProps) => {
    const {
        linkKey,
        children,
        className,
        ...otherProps
    } = props;
    const { pathname } = useLocation();
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        const link = pathname.slice(1, linkKey.length + 1);
        setIsActive(link === linkKey);
    }, [pathname]);

    return (
        <NavLink
            {...otherProps}
            className={
                classNames([
                    cls.block,
                    isActive && [cls['block--active']],
                    className,
                ])
            }
        >
            { children }
        </NavLink>
    );
});
