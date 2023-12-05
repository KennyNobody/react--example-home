import classNames from 'classnames';
import React, { LinkHTMLAttributes, memo, ReactElement } from 'react';
import IconVK from '5_shared/assets/icons/vk.svg';
import IconInst from '5_shared/assets/icons/inst.svg';
import IconTG from '5_shared/assets/icons/tg.svg';
import IconGH from '5_shared/assets/icons/gh.svg';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import cls from './LinkSocial.module.scss';

export enum IconKey {
    GH = 'gh',
    INST = 'inst',
    TG = 'tg',
    VK = 'vk',
}

const iconsComponents: Record<IconKey, ReactElement> = {
    [IconKey.GH]: <IconGH />,
    [IconKey.INST]: <IconInst />,
    [IconKey.TG]: <IconTG />,
    [IconKey.VK]: <IconVK />,
};

interface LinkSocialProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    iconKey: IconKey;
}

const iconsRecord: {} = Object.entries(iconsComponents).reduce((acc, [key, icon]) => {
    acc[key] = React.cloneElement(icon, { className: classNames(cls.icon) });
    return acc;
}, {}) as Record<IconKey, ReactElement>;

export const LinkSocial = memo((props: LinkSocialProps) => {
    const { theme } = useTheme();
    const { className, iconKey, ...otherProps } = props;

    return (
        <a
            {...otherProps}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(cls.link, cls[`link--${theme}`], className)}
        >
            { iconsRecord[iconKey] }
        </a>
    );
});
