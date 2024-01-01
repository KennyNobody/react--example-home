import React from 'react';
import classNames from 'classnames';
import {
    Title,
    TitleModeType,
} from '5_shared/ui/Title/Title';
import { ListPosts } from '4_entities/Post';
import { Toolbar } from '5_shared/ui/Toolbar';
import grid from '5_shared/css/grid.module.scss';
import { Container } from '5_shared/ui/Container';
import cls from './SectionPosts.module.scss';

interface SectionPostsProps {
    className?: string
}

export const SectionPosts = (props: SectionPostsProps) => {
    const { className } = props;

    return (
        <section className={classNames(cls.SectionPosts, className)}>
            <Container>
                <div className={classNames(grid.grid, cls.header)}>
                    <div className={classNames(grid['grid__col-2'])}>
                        <Title mode={TitleModeType.REGULAR}>
                            Написал
                        </Title>
                    </div>
                    <div className={classNames(grid['grid__col-2'])}>
                        <Toolbar>
                            <Title mode={TitleModeType.REGULAR}>
                                2016 — 2023
                            </Title>
                        </Toolbar>
                    </div>
                </div>
                <ListPosts />
                <div className={classNames(grid.grid)}>
                    <div className={classNames(grid['grid__col-2'])} />
                    <div className={classNames(grid['grid__col-2'])}>
                        <Toolbar>
                            <a
                                href="/#/"
                            >
                                Все заметки
                            </a>
                        </Toolbar>
                    </div>
                </div>
            </Container>
        </section>
    );
};
