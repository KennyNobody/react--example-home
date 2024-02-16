import React from 'react';
import classNames from 'classnames';
import { useFetchPageFront } from '1_pages/FrontPage/api/frontPagetApi';
import { Main } from '5_shared/ui/Main/Main';
import { SectionsStack } from '5_shared/ui/SectionsStack/SectionsStack';
import cls from './FrontPage.module.scss';

function FrontPage() {
    const {
        data,
        isLoading,
    } = useFetchPageFront(null);

    return (
        <Main className={classNames(cls.main)}>
            <SectionsStack
                isLoading={isLoading}
                data={data?.data?.section}
            />
        </Main>
    );
}

export default FrontPage;
