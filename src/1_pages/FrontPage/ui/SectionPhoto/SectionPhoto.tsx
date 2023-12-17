import React from 'react';
import classNames from 'classnames';
import { Toolbar } from '5_shared/ui/Toolbar';
import { Articles } from '5_shared/ui/Articles';
import grid from '5_shared/css/grid.module.scss';
import { Container } from '5_shared/ui/Container';
import { LinkTitle } from '5_shared/ui/LinkTitle/LinkTitle';
import { Title, TitleModeType } from '5_shared/ui/Title/Title';
import cls from './SectionPhoto.module.scss';

interface SectionPhotoProps {
    className?: string
}

export const SectionPhoto = (props: SectionPhotoProps) => {
    const { className } = props;

    const loadPosts = (): void => {
        alert('Подгружаем');
    };

    return (
        <section className={classNames(cls.SectionPosts, className)}>
            <Container>
                <div className={classNames(grid.grid)}>
                    <div className={classNames(grid['grid__col-2'])}>
                        <Title mode={TitleModeType.REGULAR}>
                            Наснимал
                        </Title>
                    </div>
                    <div className={classNames(grid['grid__col-2'])}>
                        <Toolbar>
                            <Title mode={TitleModeType.REGULAR}>
                                2019 — 2021
                            </Title>
                            <LinkTitle
                                href="https://github.com/KennyNobody"
                            >
                                Instagram
                            </LinkTitle>
                        </Toolbar>
                    </div>
                </div>
                <Articles onClickEvent={loadPosts}>
                    Плитка
                </Articles>
                <div className={classNames(grid.grid)}>
                    <div className={classNames(grid['grid__col-2'])} />
                    <div className={classNames(grid['grid__col-2'])}>
                        <Toolbar>
                            <a
                                href="/#/"
                            >
                                Все проекты
                            </a>
                            <a
                                href="/#/"
                            >
                                Резюме
                            </a>
                        </Toolbar>
                    </div>
                </div>
            </Container>
        </section>
    );
};
