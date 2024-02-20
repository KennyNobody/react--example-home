import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { ContentKeyType } from '5_shared/types/CommonTypes';
import { Stack, StackSizeType } from '5_shared/ui/Stack/ui/Stack';
import { SectionType } from '../../model/Section';
import { SectionDev } from '../SectionDev/SectionDev';
import { SectionPost } from '../SectionPost/SectionPost';

interface PageIndexProps {
    className?: string;
    isLoading: boolean;
    isPreview: boolean;
    data: SectionType[] | undefined;
}

const renderSection = (data: SectionType, isPreview: boolean): ReactNode | null => {
    const { contentKey } = data;

    const ListComponents: Record<ContentKeyType, React.ReactNode> = {
        [ContentKeyType.DEV]: <SectionDev key={data.id} data={data} isPreview={isPreview} />,
        [ContentKeyType.PHOTO]: null,
        [ContentKeyType.POST]: <SectionPost key={data.id} data={data} isPreview={isPreview} />,
    };

    return ListComponents[contentKey] || null;
};

export const SectionsStack = (props: PageIndexProps) => {
    const {
        data,
        className,
        isLoading,
        isPreview,
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
                    data.map((item: SectionType) => renderSection(item, isPreview))
                )
            }
        </Stack>
    );
};
