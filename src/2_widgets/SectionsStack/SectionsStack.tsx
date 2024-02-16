import React from 'react';
import classNames from 'classnames';
import { SectionType } from '2_widgets/Section';
import { SectionDev } from '2_widgets/SectionDev';
import { SectionPost } from '2_widgets/SectionPosts';
import { ContentKeyType } from '5_shared/types/CommonTypes';
import { Stack, StackSizeType } from '5_shared/ui/Stack/ui/Stack';

interface PageIndexProps {
    className?: string;
    isLoading: boolean;
    data: SectionType[] | undefined;
}

const renderSection = (data: SectionType) => {
    const { contentKey } = data;

    const ListComponents: Record<ContentKeyType, React.ReactNode> = {
        [ContentKeyType.DEV]: <SectionDev data={data} isPreview />,
        [ContentKeyType.PHOTO]: <div>PHOTOListFeature</div>,
        [ContentKeyType.POST]: <SectionPost data={data} isPreview />,
    };

    return ListComponents[contentKey] || null;
};

export const SectionsStack = (props: PageIndexProps) => {
    const {
        data,
        className,
        isLoading,
    } = props;

    if (isLoading) return <>Загрузка...</>;

    return (
        <Stack
            size={StackSizeType.LARGE}
            className={classNames(className)}
        >
            {
                data
                && data?.length > 0
                && (
                    data.map((item: SectionType) => renderSection(item))
                )
            }
        </Stack>
    );
};
