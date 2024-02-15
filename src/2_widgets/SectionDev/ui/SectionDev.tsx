import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Toolbar } from '5_shared/ui/Toolbar';
import grid from '5_shared/css/grid.module.scss';
import { Container } from '5_shared/ui/Container';
import { SectionType } from '5_shared/types/CommonTypes';
import { LinkTitle } from '5_shared/ui/LinkTitle/LinkTitle';
import { Title, TitleModeType } from '5_shared/ui/Title/Title';
import { RouterPath } from '5_shared/config/router/routerConfig';
import { Stack } from '5_shared/ui/Stack';
import {StackSizeType} from "5_shared/ui/Stack/ui/Stack";
import {SortToolbar} from "3_features/PostFilter";
import {LinkRegular} from "5_shared/ui/LinkRegular/LinkRegular";
import cls from './SectionDev.module.scss';

interface SectionProps {
    isPreview: boolean;
    className?: string;
    data: SectionType | undefined;
}

export const SectionDev = (props: SectionProps) => {
    const {
        data,
        isPreview,
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <section className={classNames(cls.section, className)}>
            <Container>
                <Stack size={StackSizeType.MIDDLE}>
                    <div className={classNames(grid.grid)}>
                        <div className={classNames(grid['grid__col-2'])}>
                            {
                                data?.title
                            && (
                                <Title mode={TitleModeType.REGULAR}>
                                    { data?.title }
                                </Title>
                            )
                            }
                        </div>
                        <div className={classNames(grid['grid__col-2'])}>
                            <Toolbar>
                                {
                                    data?.years
                                    && (
                                        <Title mode={TitleModeType.REGULAR}>
                                            { data.years }
                                        </Title>
                                    )
                                }
                                {
                                    data?.linkTitle
                                    && data?.linkPath
                                    && (
                                        <LinkTitle
                                            href={data.linkPath}
                                        >
                                            { data.linkTitle }
                                        </LinkTitle>
                                    )
                                }
                            </Toolbar>
                        </div>
                        {
                            !isPreview
                            && (
                                <>
                                    <div className={classNames(grid['grid__col-2'])} />
                                    <div className={classNames(grid['grid__col-2'])}>
                                        <SortToolbar
                                            className={classNames(cls.category)}
                                        />
                                    </div>
                                </>
                            )
                        }
                    </div>
                    {/*<ListPost mode={isPreview ? ListPostMode.STATIC : ListPostMode.DYNAMIC} />*/}
                    ListDev
                    {
                        isPreview
                        && (
                            <div className={classNames(grid.grid)}>
                                <div className={classNames(grid['grid__col-2'])} />
                                <div className={classNames(grid['grid__col-2'])}>
                                    <Toolbar>
                                        <LinkRegular
                                            to={RouterPath.dev}
                                            text={t('all projects')}
                                        />
                                        <LinkRegular
                                            to="#"
                                            text={t('resume')}
                                        />
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
