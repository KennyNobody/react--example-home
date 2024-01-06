import React from 'react';
import { Main } from '5_shared/ui/Main';
import { Stack } from '5_shared/ui/Stack';
import cls from './FrontPage.module.scss';
import { SectionDev } from '../SectionDev/SectionDev';
import { SectionPosts } from '../SectionPosts/SectionPosts';
import { SectionPhoto } from '../SectionPhoto/SectionPhoto';

function FrontPage() {
    return (
        <Main className={cls.page} data-test>
            <Stack>
                <SectionDev />
                <SectionPhoto />
                <SectionPosts />
            </Stack>

        </Main>
    );
}

export default FrontPage;
