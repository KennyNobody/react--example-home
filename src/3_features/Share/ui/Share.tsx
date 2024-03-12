import {
    VKShareButton,
    TwitterShareButton,
    FacebookShareButton,
    TelegramShareButton,
} from 'react-share';
import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { AppTheme } from '5_shared/config/ThemeContext';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { Controls } from '5_shared/ui/Controls/Controls';
import { IconKey, IconSocial } from '5_shared/ui/IconSocial/IconSocial';
import cls from './Share.module.scss';

interface ShareProps {
    className?: string;
    themeProp?: AppTheme;
}

export const Share = (props: ShareProps) => {
    const {
        themeProp,
        className,
    } = props;
    const { theme } = useTheme();
    const { t } = useTranslation();

    const themeMode = themeProp || theme;

    // TODO: Сделать мобильную версию

    return (
        <div className={classNames(cls.block, className)}>
            <span className={classNames(cls.title)}>
                { t('share') }
            </span>
            <Controls className={classNames(cls.controls)}>
                <VKShareButton
                    url="vk.com"
                    resetButtonStyle={false}
                    className={classNames(cls.button, cls[`button--${themeMode}`])}
                >
                    <IconSocial
                        iconKey={IconKey.VK}
                        className={classNames(cls.icon, cls[`icon--${themeMode}`])}
                    />
                </VKShareButton>
                <TwitterShareButton
                    url="twitter.com"
                    resetButtonStyle={false}
                    className={classNames(cls.button, cls[`button--${themeMode}`])}
                >
                    <IconSocial
                        iconKey={IconKey.X}
                        className={classNames(cls.icon, cls[`icon--${themeMode}`])}
                    />
                </TwitterShareButton>
                <FacebookShareButton
                    url="fb.com"
                    resetButtonStyle={false}
                    className={classNames(cls.button, cls[`button--${themeMode}`])}
                >
                    <IconSocial
                        iconKey={IconKey.FB}
                        className={classNames(cls.icon, cls[`icon--${themeMode}`])}
                    />
                </FacebookShareButton>
                <TelegramShareButton
                    url="tg.com"
                    resetButtonStyle={false}
                    className={classNames(cls.button, cls[`button--${themeMode}`])}
                >
                    <IconSocial
                        iconKey={IconKey.TG}
                        className={classNames(cls.icon, cls[`icon--${themeMode}`])}
                    />
                </TelegramShareButton>
            </Controls>
        </div>
    );
};
