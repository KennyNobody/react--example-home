import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {ListPost, ListPostMode,} from '3_features/ListPost';
import {Toolbar} from '5_shared/ui/Toolbar';
import grid from '5_shared/css/grid.module.scss';
import {Container} from '5_shared/ui/Container';
import {ContentKeyType} from '5_shared/types/CommonTypes';
import {LinkTitle} from '5_shared/ui/LinkTitle/LinkTitle';
import {Title, TitleModeType} from '5_shared/ui/Title/Title';
import {RouterPath} from '5_shared/config/router/routerConfig';
import cls from './Section.module.scss';
import {SectionType} from '../model/types';

interface SectionProps {
    isPreview: boolean;
    className?: string;
    data: SectionType;
}

export const Section = (props: SectionProps) => {
    const {
        data,
        isPreview,
        className,
    } = props;

    const SectionFeatures: Record<ContentKeyType, React.ReactNode> = {
        [ContentKeyType.DEV]: <>DEVListFeature</>,
        [ContentKeyType.PHOTO]: <>PHOTOListFeature</>,
        [ContentKeyType.POST]: <ListPost mode={isPreview ? ListPostMode.STATIC : ListPostMode.DYNAMIC} />,
    };

    return (
        <section className={classNames(cls.section, className)}>
            <Container>
                <div className={classNames(grid.grid, cls.header)}>
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
                { data?.contentKey && SectionFeatures[data?.contentKey] }
                {
                    isPreview
                    && (
                        <div className={classNames(grid.grid)}>
                            <div className={classNames(grid['grid__col-2'])} />
                            <div className={classNames(grid['grid__col-2'])}>
                                <Toolbar>
                                    <Link
                                        to={RouterPath.posts}
                                    >
                                        Все заметки
                                    </Link>
                                </Toolbar>
                            </div>
                        </div>
                    )
                }
            </Container>
        </section>
    );
};
