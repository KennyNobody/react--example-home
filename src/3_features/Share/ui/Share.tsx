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

interface ShareProps {
    className?: string;
}

export const Share = (props: ShareProps) => {
    const { className } = props;
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
                    className={classNames(cls.button)}
                >
                    <IconSocial
                        iconKey={IconKey.VK}
                        className={classNames(cls.icon)}
                    />
                </VKShareButton>
                <TwitterShareButton
                    url="twitter.com"
                    resetButtonStyle={false}
                    className={classNames(cls.button)}
                >
                    <IconSocial
                        iconKey={IconKey.X}
                        className={classNames(cls.icon)}
                    />
                </TwitterShareButton>
                <FacebookShareButton
                    url="fb.com"
                    resetButtonStyle={false}
                    className={classNames(cls.button)}
                >
                    <IconSocial
                        iconKey={IconKey.FB}
                        className={classNames(cls.icon)}
                    />
                </FacebookShareButton>
                <TelegramShareButton
                    url="tg.com"
                    resetButtonStyle={false}
                    className={classNames(cls.button)}
                >
                    <IconSocial
                        iconKey={IconKey.TG}
                        className={classNames(cls.icon)}
                    />
                </TelegramShareButton>
            </Controls>
        </div>
    );
};
