import {
    memo, useEffect,
} from 'react';
import classNames from 'classnames';
import { Share } from '3_features/Share';

import {
    ListTags,
    ArticleCategory,
    ArticleCategorySize,
} from '4_entities/Category';
import { ArticleDevType } from '4_entities/Dev';
import { PostArticleType } from '4_entities/Post';
import grid from '5_shared/css/grid.module.scss';
import { Container } from '5_shared/ui/Container';
import { Editor } from '5_shared/ui/Editor/Editor';
import { DateInfo } from '5_shared/ui/DateInfo/DateInfo';
import Icon from '5_shared/assets/icons/arrow-scroll.svg';
import { useStickyObserver } from '5_shared/libs/hooks/useStickyObserver';
import cls from './DetailContent.module.scss';
import { DetailEditor } from '../DetailEditor/DetailEditor';

interface DetailContentProps {
    className?: string;
    isLoading: boolean;
    data?: PostArticleType | ArticleDevType;
}

export const DetailContent = memo((props: DetailContentProps) => {
    const {
        data,
        className,
        isLoading,
    } = props;

    useEffect(() => {
        console.log(data);
    }, [data]);

    const { ref, isSticky } = useStickyObserver();

    return (
        <div className={classNames(cls.block, className)}>
            <picture
                hidden={isSticky}
                className={classNames(cls.picture)}
            >
                {
                    data?.main?.preview?.data?.url
                    && (
                        <img src={`${__BASE_URL__}${data?.main?.preview?.data?.url}`} alt="#" />
                    )
                }
            </picture>
            <div className={classNames(cls.intro)}>
                <Container>
                    <div className={classNames(cls['intro-content'])}>
                        <div className={classNames(grid.grid)}>
                            <div className={classNames(grid['grid__col-2'])}>
                                <h1 className={classNames(cls.title)}>
                                    { data?.main?.previewTitle }
                                    <br />
                                    { data?.main?.previewCaption }
                                </h1>
                            </div>
                            <div className={classNames(grid['grid__col-2'])}>
                                <div className={classNames(cls['toolbar-category'])}>
                                    {
                                        data?.category?.data
                                        && (
                                            <ArticleCategory
                                                data={data?.category?.data}
                                                size={ArticleCategorySize.BIG}
                                            />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={classNames(cls['main-content'])}>
                            <div className={classNames(grid.grid, cls.grid)}>
                                <div className={classNames(grid['grid__col-2'])}>
                                    {
                                        data?.tags?.data
                                        && data?.tags?.data?.length > 0
                                        && (
                                            <ListTags list={data?.tags?.data} />
                                        )
                                    }
                                </div>
                                <div className={classNames(grid['grid__col-1'])}>
                                    {
                                        data?.main?.introCaption
                                        && (
                                            <Editor
                                                data={data.main.introCaption}
                                            />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div
                className={classNames(cls['intro-main'])}
            >
                <Container>
                    <div
                        ref={ref}
                        id="scroll-anchor"
                        className={
                            classNames(
                                cls.footer,
                                { [cls['footer--fixed']]: isSticky },
                            )
                        }
                    >
                        <div className={classNames(grid.grid, cls['footer-grid'])}>
                            <div className={grid['grid__col-1']}>
                                {
                                    data?.publishedAt
                                    && (
                                        <DateInfo
                                            date={data?.publishedAt}
                                            className={classNames(cls.time)}
                                        />
                                    )
                                }
                            </div>
                            <div className={grid['grid__col-2']}>
                                <a
                                    hidden={isSticky}
                                    href="#scroll-anchor"
                                    className={classNames(cls.button)}
                                >
                                    <Icon
                                        className={classNames(cls.icon)}
                                    />
                                </a>
                                <div
                                    hidden={!isSticky}
                                    className={classNames(cls.caption)}
                                >
                                    <h3 className={classNames(cls.titleCaption)}>
                                        { data?.title }
                                    </h3>
                                    {
                                        data?.category?.data
                                        && (
                                            <ArticleCategory
                                                data={data?.category?.data}
                                                size={ArticleCategorySize.SMALL}
                                            />
                                        )
                                    }
                                </div>
                            </div>
                            <div className={grid['grid__col-1']}>
                                <div className={classNames(cls['share-column'])}>
                                    <Share
                                        className={classNames(cls.share)}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    {
                        data?.main?.content
                        && (
                            <DetailEditor
                                data={data.main.content}
                            />
                        )
                    }
                </Container>
            </div>
        </div>
    );
});
