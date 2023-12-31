import classNames from 'classnames';
import React from 'react';
import { IconKey, LinkSocial } from '5_shared/ui/LinkSocial/LinkSocial';
import { Controls } from '5_shared/ui/Controls/Controls';
import cls from './Socials.module.scss';

interface SocialsProps {
    className?: string
}

export const Socials = (props: SocialsProps) => {
    const { className } = props;

    const linksArray = [
        {
            iconKey: IconKey.TG,
            href: 'https://web.telegram.org/',
        },
        {
            iconKey: IconKey.INST,
            href: 'https://www.instagram.com/',
        },
        {
            iconKey: IconKey.VK,
            href: 'https://vk.com/feed',
        },
        {
            iconKey: IconKey.GH,
            href: 'https://github.com/KennyNobody/',
        },
    ];

    return (
        <Controls className={classNames(className)}>
            {
                linksArray.map((item, index) => (
                    <LinkSocial
                        key={index}
                        href={item.href}
                        iconKey={item.iconKey}
                    />
                ))
            }
        </Controls>
    );
};
