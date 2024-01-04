import React from 'react';
import classNames from 'classnames';
import { Main } from '5_shared/ui/Main';
import { Stack } from '5_shared/ui/Stack';
import cls from './FrontPage.module.scss';
import { SectionDev } from '../SectionDev/SectionDev';
import { SectionPosts } from '../SectionPosts/SectionPosts';
import { SectionPhoto } from '../SectionPhoto/SectionPhoto';

function FrontPage() {
    return (
        <Main className={cls.page}>
            <Stack>
                <SectionDev />
                <SectionPhoto />
                <SectionPosts />
            </Stack>

        </Main>
    );
}

export default FrontPage;
