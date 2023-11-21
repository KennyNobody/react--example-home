import React from 'react';
import { Toolbar } from '2_widgets/Toolbar/ui/Toolbar/Toolbar';
import { Container } from '5_shared/ui/Container/Container';
import cls from './FrontPage.module.scss';

function FrontPage() {
    return (
        <div className={cls.page}>
            <Container>
                <Toolbar />
            </Container>
        </div>
    );
}

export default FrontPage;
