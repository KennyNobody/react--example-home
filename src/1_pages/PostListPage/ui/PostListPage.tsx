import React from 'react';
import { Container } from '5_shared/ui/Container';
import { ContentKeyType } from '5_shared/types/CommonTypes';
import cls from './PostListPage.module.scss';


const ListPage = () => {
    return (
        <div className={cls.page}>
            <Container>
                {/* { mode && ListComponents[mode] } */}
            </Container>
        </div>
    );
}

export default ListPage;
