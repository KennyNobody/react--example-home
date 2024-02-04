import React from 'react';
import classNames from 'classnames';
import { SortToolbar } from '3_features/SortFilter';
import { PostList, PostListMode } from '3_features/PostList';
import grid from '5_shared/css/grid.module.scss';
import { Container } from '5_shared/ui/Container';
import { Title, TitleModeType } from '5_shared/ui/Title/Title';
import cls from './ListPage.module.scss';

function ListPage() {
    return (
        <div className={cls.page}>
            <Container>
                <div className={classNames(grid.grid, cls.header)}>
                    <div className={classNames(grid['grid__col-2'])}>
                        <Title mode={TitleModeType.REGULAR}>
                            Заметки
                        </Title>
                    </div>
                    <div className={classNames(grid['grid__col-2'])}>
                        <Title
                            className={classNames(cls.subtitle)}
                            mode={TitleModeType.REGULAR}
                        >
                            2016 — 2023
                        </Title>
                        <SortToolbar
                            className={classNames(cls.category)}
                        />
                    </div>
                </div>
                <PostList mode={PostListMode.DYNAMIC} />
            </Container>
        </div>
    );
}

export default ListPage;
