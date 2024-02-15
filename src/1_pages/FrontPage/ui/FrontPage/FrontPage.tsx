import React from 'react';
import { Main } from '5_shared/ui/Main';
import { Stack } from '5_shared/ui/Stack';
import { useFetchPageFront } from '1_pages/FrontPage/api/frontPagetApi';
import { SectionType } from '2_widgets/Section';
import { SectionPost } from '2_widgets/SectionPosts';
import { StackSizeType } from '5_shared/ui/Stack/ui/Stack';
import { SectionDev } from '2_widgets/SectionDev';
import { ContentKeyType } from '5_shared/types/CommonTypes';
import cls from './FrontPage.module.scss';

const getSection = (data: SectionType) => {
    const { contentKey } = data;

    const ListComponents: Record<ContentKeyType, React.ReactNode> = {
        [ContentKeyType.DEV]: <SectionDev data={data} isPreview />,
        [ContentKeyType.PHOTO]: <div>PHOTOListFeature</div>,
        [ContentKeyType.POST]: <SectionPost data={data} isPreview />,
    };

    return ListComponents[contentKey] || null;
};

function FrontPage() {
    const {
        data,
        isLoading,
    } = useFetchPageFront(null);

    return (
        <Main className={cls.page} data-test>
            <Stack size={StackSizeType.LARGE}>
                {
                    data?.data?.section?.length
                    && (
                        data?.data?.section.map((item: SectionType) => getSection(item))
                    )
                }
            </Stack>
        </Main>
    );
}

export default FrontPage;
