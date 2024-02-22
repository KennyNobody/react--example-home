import classNames from 'classnames';
import React from 'react';
import { Controls } from '5_shared/ui/Controls/Controls';
import {IconKey} from '5_shared/ui/IconSocial/IconSocial';
import { LinkSocial } from '5_shared/ui/LinkSocial/LinkSocial';
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
        <Controls className={classNames(className, cls.block)}>
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
