import {
    VKShareButton,
    TwitterShareButton,
    FacebookShareButton,
    TelegramShareButton,
} from 'react-share';
import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Controls } from '5_shared/ui/Controls/Controls';
import { IconKey, IconSocial } from '5_shared/ui/IconSocial/IconSocial';
import cls from './Share.module.scss';
import {AppTheme} from "5_shared/config/ThemeContext";

interface ShareProps {
    theme: AppTheme;
    className?: string;
}

export const Share = (props: ShareProps) => {
    const {
        theme,
        className,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.block, className)}>
            <span className={classNames(cls.title)}>
                { t('share') }
            </span>
            <Controls>
                <VKShareButton
                    url="vk.com"
                    resetButtonStyle={false}
                    className={classNames(cls.button, cls[`button--${theme}`])}
                >
                    <IconSocial
                        iconKey={IconKey.VK}
                        className={classNames(cls.icon, cls[`icon--${theme}`])}
                    />
                </VKShareButton>
                <TwitterShareButton
                    url="twitter.com"
                    resetButtonStyle={false}
                    className={classNames(cls.button, cls[`button--${theme}`])}
                >
                    <IconSocial
                        iconKey={IconKey.X}
                        className={classNames(cls.icon, cls[`icon--${theme}`])}
                    />
                </TwitterShareButton>
                <FacebookShareButton
                    url="fb.com"
                    resetButtonStyle={false}
                    className={classNames(cls.button, cls[`button--${theme}`])}
                >
                    <IconSocial
                        iconKey={IconKey.FB}
                        className={classNames(cls.icon, cls[`icon--${theme}`])}
                    />
                </FacebookShareButton>
                <TelegramShareButton
                    url="tg.com"
                    resetButtonStyle={false}
                    className={classNames(cls.button, cls[`button--${theme}`])}
                >
                    <IconSocial
                        iconKey={IconKey.TG}
                        className={classNames(cls.icon, cls[`icon--${theme}`])}
                    />
                </TelegramShareButton>
            </Controls>
        </div>
    );
};
