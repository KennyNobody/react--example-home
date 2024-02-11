import React from 'react';
import { PostSectionHead } from '2_widgets/PostSectionHead';
import { ListPost, ListPostMode } from '3_features/ListPost';
import { Container } from '5_shared/ui/Container';
import { ContentKeyType } from '5_shared/types/CommonTypes';
import cls from './ListPage.module.scss';

interface ListPageProps {
    mode: ContentKeyType,
}

const HeadComponents: Record<ContentKeyType, React.ReactNode> = {
    [ContentKeyType.DEV]: <div>Dev head</div>,
    [ContentKeyType.PHOTO]: <div>Photo head</div>,
    [ContentKeyType.POST]: <PostSectionHead />,
};

const ListComponents: Record<ContentKeyType, React.ReactNode> = {
    [ContentKeyType.DEV]: <div>DEVListFeature</div>,
    [ContentKeyType.PHOTO]: <div>PHOTOListFeature</div>,
    [ContentKeyType.POST]: <ListPost mode={ListPostMode.DYNAMIC} />,
};

function ListPage({ mode }: ListPageProps) {
    return (
        <div className={cls.page}>
            <Container>
                { mode && HeadComponents[mode] }
                { mode && ListComponents[mode] }
            </Container>
        </div>
    );
}

export default ListPage;
