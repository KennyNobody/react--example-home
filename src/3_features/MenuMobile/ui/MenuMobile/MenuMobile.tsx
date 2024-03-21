import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { LinkNav } from '5_shared/ui/LinkNav/LinkNav';
import { ContentKeyType } from '5_shared/types/CommonTypes';
import { RouterPath } from '5_shared/config/router/routerConfig';
import { WidgetMobile } from '5_shared/ui/WidgetMobile/WidgetMobile';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '3_features/LanguageSwitcher';
import { ThemeSwitcher } from '3_features/ThemeSwitcher';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import cls from './MenuMobile.module.scss';
import { getMenuMobileIsOpened } from '../../model/selectors/menuMobile';
import {Overlay} from "5_shared/ui/Overlay/Overlay";

interface MenuMobileProps {
    className?: string;
    children: ReactNode;
}

export const MenuMobile = (props: MenuMobileProps) => {
    const {
        children,
        className,
    } = props;

    const isOpened = useSelector(getMenuMobileIsOpened);
    const { theme } = useTheme();
    const { t } = useTranslation();

    return (
        <div
            className={
                classNames(
                    cls.block,
                    cls[`block--${theme}`],
                    className,
                )
            }
        >
            <Overlay
                isVisible={isOpened || false}
                className={classNames(cls.overlay)}
            />
            <div className={classNames(cls.wrapper)}>
                { children }
            </div>
            <nav
                hidden={!isOpened}
                className={classNames(cls.nav)}
            >
                <LinkNav linkKey={ContentKeyType.DEV} to={RouterPath.dev}>Разработка</LinkNav>
                <LinkNav linkKey={ContentKeyType.PHOTO} to={RouterPath.photo}>Фото-проекты</LinkNav>
                <LinkNav linkKey={ContentKeyType.POST} to={RouterPath.posts}>Заметки</LinkNav>
                <WidgetMobile
                    title={t('language')}
                >
                    <LanguageSwitcher
                        className={
                            classNames(
                                cls.switcher,
                            )
                        }
                    />
                </WidgetMobile>
                <WidgetMobile
                    title={t('theme')}
                >
                    <ThemeSwitcher />
                </WidgetMobile>
            </nav>
        </div>
    );
};
