import classNames from 'classnames';
import {
    memo,
    useState,
    ReactNode,
    useEffect,
} from 'react';
import {
    NavLink,
    useLocation,
    NavLinkProps,
} from 'react-router-dom';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { AppTheme } from '5_shared/config/ThemeContext';
import { ContentKeyType } from '5_shared/types/CommonTypes';
import cls from './LinkNav.module.scss';

interface LinkAppProps extends NavLinkProps {
    className?: string;
    children: ReactNode;
    themeProp?: AppTheme;
    linkKey: ContentKeyType;
}

export const LinkNav = memo((props: LinkAppProps) => {
    const {
        linkKey,
        children,
        themeProp,
        className,
        ...otherProps
    } = props;
    const { pathname } = useLocation();
    const { theme } = useTheme();
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
                    cls[`block--${themeProp || theme}`],
                    isActive && [cls['block--active']],
                    className,
                ])
            }
        >
            { children }
        </NavLink>
    );
});
