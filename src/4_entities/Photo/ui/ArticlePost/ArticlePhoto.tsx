import classNames from 'classnames';
import { useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    ArticleCategory,
    ArticleCategorySize,
} from '4_entities/Category';
import useHeight from '5_shared/libs/hooks/useHeight';
import { RouterPath } from '5_shared/config/router/routerConfig';
import cls from './ArticlePhoto.module.scss';
import { ArticlePhotoType } from '../../model/types/ArticlePhoto';

interface ArticlePhotoProps {
    className?: string;
    data?: ArticlePhotoType;
}

export const ArticlePhoto = (props: ArticlePhotoProps) => {
    const {
        data,
        className,
    } = props;

    const elRef = useRef(null);
    const heightEl = useHeight(elRef, 0.82);
    const previewUrl = data?.main?.preview?.data?.formats?.large?.url || '';
    const altText = data?.main?.preview?.data?.alternativeText || '#';

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
            to={`${RouterPath.photo_detail}${data?.id}`}
            className={classNames(cls.article, className)}
        >
            {
                data?.main?.showPreview
                && previewUrl
                && (
                    <picture className={classNames(cls.picture)}>
                        <img src={`${__BASE_URL__}${previewUrl}`} alt={altText} />
                    </picture>
                )
            }
            <div className={classNames(cls.main)}>
                {data?.main?.previewTitle && (
                    <h3 className={classNames(cls.title)}>
                        {data.main.previewTitle}
                    </h3>
                )}
                {
                    data?.main?.previewCaption && (
                        <p className={classNames(cls.caption)}>
                            {data.main.previewCaption}
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
