import classNames from 'classnames';
import React, { LinkHTMLAttributes, memo } from 'react';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { IconKey, IconSocial } from '5_shared/ui/IconSocial/IconSocial';
import cls from './LinkSocial.module.scss';

interface LinkSocialProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    iconKey: IconKey;
}

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
            <IconSocial
                iconKey={iconKey}
                className={classNames(cls.icon)}
            />
        </a>
    );
});
