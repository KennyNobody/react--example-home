import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { DevFilter } from '3_features/DevFilter';
import { SkeletonBlock } from '3_features/Skeleton';
import grid from '5_shared/css/grid.module.scss';
import { Toolbar } from '5_shared/ui/Toolbar/Toolbar';
import { Container } from '5_shared/ui/Container/Container';
import { Stack, StackSizeType } from '5_shared/ui/Stack/Stack';
import { LinkRegular } from '5_shared/ui/LinkRegular/LinkRegular';
import cls from './SectionLoading.module.scss';

interface SectionProps {
    isPreview: boolean;
    className?: string;
}

export const SectionLoading = (props: SectionProps) => {
    const {
        isPreview,
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <section className={classNames(cls.section, className)}>
            <Container>
                <Stack size={StackSizeType.MIDDLE}>
                    <div className={classNames(grid.grid, cls.grid)}>
                        <div className={classNames(grid['grid__col-2'])}>
                            <SkeletonBlock
                                className={classNames(cls.title)}
                            />
                        </div>
                        <div className={classNames(grid['grid__col-2'])}>
                            <SkeletonBlock
                                className={classNames(cls.title)}
                            />
                        </div>
                        {
                            !isPreview
                            && (
                                <>
                                    <div
                                        className={
                                            classNames(
                                                grid['grid__col-2'],
                                                grid['grid__col-mob-4'],
                                            )
                                        }
                                    >
                                        <LinkRegular
                                            to="#"
                                            text={t('resume')}
                                            className={classNames(cls.link)}
                                        />
                                    </div>
                                    <div
                                        className={
                                            classNames(
                                                grid['grid__col-2'],
                                                grid['grid__col-mob-4'],
                                            )
                                        }
                                    >
                                        <DevFilter />
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <SkeletonBlock className={classNames(cls.main)} />
                    {
                        isPreview
                        && (
                            <div className={classNames(grid.grid, cls.grid)}>
                                <div
                                    className={
                                        classNames(
                                            grid['grid__col-2'],
                                        )
                                    }
                                >
                                    <SkeletonBlock className={classNames(cls.link)} />
                                </div>
                                <div
                                    className={
                                        classNames(
                                            grid['grid__col-2'],
                                        )
                                    }
                                >
                                    <Toolbar>
                                        <SkeletonBlock className={classNames(cls.link)} />
                                        <SkeletonBlock className={classNames(cls.link)} />
                                    </Toolbar>
                                </div>
                            </div>
                        )
                    }
                </Stack>
            </Container>
        </section>
    );
};
