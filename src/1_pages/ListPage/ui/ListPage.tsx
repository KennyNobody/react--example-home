import React from 'react';
import { SectionDev } from '2_widgets/SectionDev';
import { SectionPost } from '2_widgets/SectionPosts';
import { Container } from '5_shared/ui/Container';
import { ContentKeyType } from '5_shared/types/CommonTypes';
import cls from './ListPage.module.scss';

interface ListPageProps {
    mode: ContentKeyType,
}

const ListComponents: Record<ContentKeyType, React.ReactNode> = {
    [ContentKeyType.DEV]: <SectionDev data={undefined} isPreview={false} />,
    [ContentKeyType.PHOTO]: <div>PHOTOListFeature</div>,
    [ContentKeyType.POST]: <SectionPost data={undefined} isPreview={false} />,
};

const ListPage = ({ mode }: ListPageProps) => {
    return (
        <div className={cls.page}>
            <Container>
                { mode && ListComponents[mode] }
            </Container>
        </div>
    );
}

export default ListPage;
