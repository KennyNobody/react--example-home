import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {
    Title,
    TitleModeType,
} from '5_shared/ui/Title/Title';
import { Toolbar } from '5_shared/ui/Toolbar';
import grid from '5_shared/css/grid.module.scss';
import { Container } from '5_shared/ui/Container';
import { RouterPath } from '5_shared/config/router/routerConfig';
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
                POSTS
                <div className={classNames(grid.grid)}>
                    <div className={classNames(grid['grid__col-2'])} />
                    <div className={classNames(grid['grid__col-2'])}>
                        <Toolbar>
                            <Link
                                to={RouterPath.list}
                            >
                                Все заметки
                            </Link>
                        </Toolbar>
                    </div>
                </div>
            </Container>
        </section>
    );
};
