import React from 'react';
import classNames from 'classnames';
import { Main } from '5_shared/ui/Main';
import cls from './FrontPage.module.scss';
import { SectionDev } from '../SectionDev/SectionDev';
import { SectionPosts } from '../SectionPosts/SectionPosts';
import { SectionPhoto } from '../SectionPhoto/SectionPhoto';

function FrontPage() {
    return (
        <Main className={cls.page}>
            <SectionDev
                className={
                    classNames(cls.section)
                }
            />
            <SectionPhoto
                className={
                    classNames(cls.section)
                }
            />
            <SectionPosts />
        </Main>
    );
}

export default FrontPage;
