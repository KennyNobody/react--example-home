import React, {useEffect} from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { ListPhoto } from '3_features/ListPhoto';
import { Stack } from '5_shared/ui/Stack';
import { Toolbar } from '5_shared/ui/Toolbar';
import grid from '5_shared/css/grid.module.scss';
import { Container } from '5_shared/ui/Container';
import { StackSizeType } from '5_shared/ui/Stack/ui/Stack';
import { LinkTitle } from '5_shared/ui/LinkTitle/LinkTitle';
import { Title, TitleModeType } from '5_shared/ui/Title/Title';
import { RouterPath } from '5_shared/config/router/routerConfig';
import { LinkRegular } from '5_shared/ui/LinkRegular/LinkRegular';
import cls from './SectionPhoto.module.scss';
import { SectionType } from '../../model/Section';

interface SectionProps {
    isPreview: boolean;
    className?: string;
    data: SectionType | undefined;
}

export const SectionPhoto = (props: SectionProps) => {
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
                    <div className={classNames(grid.grid, cls.grid)}>
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
                    </div>
                    <ListPhoto isPreview={isPreview} />
                    {
                        isPreview
                        && (
                            <div className={classNames(grid.grid)}>
                                <div className={classNames(grid['grid__col-2'])} />
                                <div className={classNames(grid['grid__col-2'])}>
                                    <Toolbar>
                                        <LinkRegular
                                            to={RouterPath.photo}
                                            text={t('allProjects')}
                                        />
                                        {/* TODO: Указать ссылку на CV */}
                                        {/* <LinkRegular */}
                                        {/*     to="#" */}
                                        {/*     text={t('cv')} */}
                                        {/* /> */}
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
