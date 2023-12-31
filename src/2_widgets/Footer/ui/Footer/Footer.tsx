import classNames from 'classnames';
import React from 'react';
import { ThemeSwitcher } from '3_features/ThemeSwitcher';
import grid from '5_shared/css/grid.module.scss';
import { Container } from '5_shared/ui/Container';
import { Controls } from '5_shared/ui/Controls/Controls';
import { IconKey, LinkSocial } from '5_shared/ui/LinkSocial/LinkSocial';
import cls from './Footer.module.scss';
import { Years } from '../Years/Years';
import { Author } from '../Author/Author';

interface FooterProps {
    className?: string;
}

export function Footer(props: FooterProps) {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <Container>
                <div className={classNames(grid.grid)}>
                    <div className={classNames(grid['grid__col-2'])}>
                        <div className={classNames(cls.info)}>
                            <Years />
                            <Author />
                        </div>
                    </div>
                    <div className={classNames(grid['grid__col-2'])}>
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
