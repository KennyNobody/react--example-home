import classNames from 'classnames';
import React from 'react';
import { AppData } from '0_app/types/MainResponseType';
import { ThemeSwitcher } from '3_features/ThemeSwitcher';
import grid from '5_shared/css/grid.module.scss';
import { Controls } from '5_shared/ui/Controls/Controls';
import { Container } from '5_shared/ui/Container/Container';
import { IconKey } from '5_shared/ui/IconSocial/IconSocial';
import { LinkSocial } from '5_shared/ui/LinkSocial/LinkSocial';
import cls from './Footer.module.scss';
import { FooterCaption } from '../FooterCaption/FooterCaption';

interface FooterProps {
    data: AppData;
    className?: string;
}

export function Footer(props: FooterProps) {
    const {
        data,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <Container>
                <div className={classNames(grid.grid, cls.grid)}>
                    <div className={classNames(grid['grid__col-2'], grid['grid__col-mob-4'])}>
                        <div className={classNames(cls.info)}>
                            { data?.years && <FooterCaption className={classNames(cls['caption-left'])} data={data?.years} /> }
                            { data?.author && <FooterCaption className={classNames(cls['caption-right'])} data={data?.author} /> }
                        </div>
                    </div>
                    <div className={classNames(grid['grid__col-2'], grid['grid__col-mob-4'])}>
                        <div className={classNames(cls.toolbar)}>
                            <ThemeSwitcher />
                            <Controls>
                                <LinkSocial
                                    iconKey={IconKey.TG}
                                    href="https://web.telegram.org/"
                                />
                                <LinkSocial
                                    iconKey={IconKey.INST}
                                    href="https://www.instagram.com/"
                                />
                                <LinkSocial
                                    iconKey={IconKey.VK}
                                    href="https://vk.com/feed"
                                />
                                <LinkSocial
                                    iconKey={IconKey.GH}
                                    href="https://github.com/KennyNobody/"
                                />
                            </Controls>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
