import classNames from 'classnames';
import { useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    ArticleCategory,
    ArticleCategorySize,
} from '4_entities/Category';
import useHeight from '5_shared/libs/hooks/useHeight';
import { RouterPath } from '5_shared/config/router/routerConfig';
import cls from './ArticlePost.module.scss';
import { PostArticleType } from '../../model/types/PostArticle';

interface ArticlePostProps {
    className?: string;
    data?: PostArticleType;
}

export const ArticlePost = (props: ArticlePostProps) => {
    const {
        data,
        className,
    } = props;

    const elRef = useRef(null);
    const heightEl = useHeight(elRef, 1.15);

    const skeleton = useMemo(() => (
        <div
            ref={elRef}
            style={{
                width: '100%',
                height: `${heightEl}px`,
            }}
            className={
                classNames(
                    cls.article,
                    cls['article--skeleton'],
                    className,
                )
            }
        />
    ), [heightEl, className]);

    const article = useMemo(() => (
        <Link
            ref={elRef}
            style={{
                width: '100%',
                height: `${heightEl}px`,
            }}
            to={`${RouterPath.post_detail}${data?.id}`}
            className={classNames(cls.article, className)}
        >
            <div className={classNames(cls.main)}>
                {data?.previewTitle && (
                    <h3 className={classNames(cls.title)}>
                        {data.previewTitle}
                    </h3>
                )}
                {
                    data?.previewCaption && (
                        <p className={classNames(cls.caption)}>
                            {data.previewCaption}
                        </p>
                    )
                }
            </div>
            {
                data?.category?.data
                && (
                    <ArticleCategory
                        className={cls.tag}
                        data={data?.category?.data}
                        size={ArticleCategorySize.SMALL}
                    />
                )
            }
        </Link>
    ), [heightEl, className, data]);

    return data ? article : skeleton;
};
