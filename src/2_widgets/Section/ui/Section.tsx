import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {
    PostList,
    PostListMode,
} from '3_features/PostList';
import { Toolbar } from '5_shared/ui/Toolbar';
import grid from '5_shared/css/grid.module.scss';
import { Container } from '5_shared/ui/Container';
import { ContentKeyType } from '5_shared/types/CommonTypes';
import { LinkTitle } from '5_shared/ui/LinkTitle/LinkTitle';
import { Title, TitleModeType } from '5_shared/ui/Title/Title';
import { RouterPath } from '5_shared/config/router/routerConfig';
import cls from './Section.module.scss';
import { SectionType } from '../model/types';

const SectionFeatures: Record<ContentKeyType, React.ReactNode> = {
    [ContentKeyType.DEV]: <>DEVListFeature</>,
    [ContentKeyType.PHOTO]: <>PHOTOListFeature</>,
    [ContentKeyType.POST]: <PostList mode={PostListMode.STATIC} />,
};

interface SectionProps {
    className?: string;
    data: SectionType;
}

export const Section = (props: SectionProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <section className={classNames(cls.SectionPosts, className)}>
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
                <div className={classNames(grid.grid)}>
                    <div className={classNames(grid['grid__col-2'])} />
                    <div className={classNames(grid['grid__col-2'])}>
                        <Toolbar>
                            <Link
                                to={RouterPath.list}
                            >
                                Все заметки
                            </Link>
                        </Toolbar>
                    </div>
                </div>
            </Container>
        </section>
    );
};
