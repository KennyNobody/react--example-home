import React from 'react';
import { Toolbar } from '2_widgets/Toolbar';
import { Articles } from '5_shared/ui/Articles';
import { Container } from '5_shared/ui/Container';
import cls from './FrontPage.module.scss';

function FrontPage() {
    const loadPosts = (): void => {
        alert('Подгружаем');
    };

    return (
        <div className={cls.page}>
            <Container>
                <Toolbar />
                <Articles onClickEvent={loadPosts}>
                    Плитка
                </Articles>
            </Container>
        </div>
    );
}

export default FrontPage;
