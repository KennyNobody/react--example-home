import classNames from 'classnames';
import cls from './Footer.module.scss';
import React from "react";
import {ThemeSwitcher} from "3_features/ThemeSwitcher";
import {useTheme} from "5_shared/libs/hooks/useTheme";
import {IconKey, LinkSocial} from "5_shared/ui/LinkSocial/LinkSocial";
import {Controls} from "5_shared/ui/Controls/Controls";

interface FooterProps {
    className?: string;
}

export const Footer = (props: FooterProps) => {
    const { className } = props;
    const {toggleTheme} = useTheme();

    return (
        <div className={classNames(cls.block, className)}>
            Подвал
            <ThemeSwitcher />
            <Controls>
                <LinkSocial
                    iconKey={IconKey.TG}
                    href={'https://web.telegram.org/'}
                />
                <LinkSocial
                    iconKey={IconKey.INST}
                    href={'https://www.instagram.com/'}
                />
                <LinkSocial
                    iconKey={IconKey.VK}
                    href={'https://vk.com/feed'}
                />
                <LinkSocial
                    iconKey={IconKey.GH}
                    href={'https://github.com/KennyNobody/'}
                />
            </Controls>
        </div>
    );
};
