import React from 'react';
import { Main } from '5_shared/ui/Main';
import { Stack } from '5_shared/ui/Stack';
import { useFetchPageFront } from '1_pages/FrontPage/api/frontPagetApi';
import { Section, SectionType } from '2_widgets/Section';
import cls from './FrontPage.module.scss';

function FrontPage() {
    const {
        data,
        isLoading,
    } = useFetchPageFront(null);

    return (
        <Main className={cls.page} data-test>
            <Stack>
                {
                    data?.data?.section?.length
                    && (
                        data?.data?.section.map((item: SectionType) => (
                            <Section
                                isPreview
                                data={item}
                                key={item.id}
                            />
                        ))
                    )
                }
            </Stack>
        </Main>
    );
}

export default FrontPage;
