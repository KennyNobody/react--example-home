import React from 'react';
import classNames from 'classnames';
import { SectionsStack } from '2_widgets/SectionsStack';
import { Main } from '5_shared/ui/Main/Main';
import cls from './PostListPage.module.scss';
import { useFetchPagePost } from '../api/postListPageApi';

const ListPage = () => {
    const {
        data,
        isLoading,
    } = useFetchPagePost(null);

    return (
        <Main className={classNames(cls.main)}>
            <SectionsStack
                isPreview={false}
                isLoading={isLoading}
                data={data?.data?.section}
            />
        </Main>
    );
};

export default ListPage;
