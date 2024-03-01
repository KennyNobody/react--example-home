import classNames from 'classnames';
import { useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    ArticleCategory,
    ArticleCategorySize,
} from '4_entities/Category';
import useHeight from '5_shared/libs/hooks/useHeight';
import { AppTheme } from '5_shared/config/ThemeContext';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { RouterPath } from '5_shared/config/router/routerConfig';
import cls from './ArticlePhoto.module.scss';
import { ArticlePhotoType } from '../../model/types/ArticlePhoto';

interface ArticlePhotoProps {
    className?: string;
    themeProp?: AppTheme;
    data?: ArticlePhotoType;
}

export const ArticlePhoto = (props: ArticlePhotoProps) => {
    const {
        data,
        themeProp,
        className,
    } = props;

    const { theme } = useTheme();
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
                    cls[`article--${themeProp || theme}`],
                    cls['article--skeleton'],
                    className,
                )
            }
        />
    ), [heightEl, className, themeProp, theme, data]);

    const article = useMemo(() => (
        <Link
            ref={elRef}
            style={{
                width: '100%',
                height: `${heightEl}px`,
            }}
            to={`${RouterPath.photo_detail}${data?.id}`}
            className={
                classNames(
                    cls.article,
                    cls[`article--${themeProp || theme}`],
                    className,
                )
            }
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
                    <h3
                        className={
                            classNames(
                                cls.title,
                                cls[`title--${themeProp || theme}`],
                            )
                        }
                    >
                        {data.main.previewTitle}
                    </h3>
                )}
                {
                    data?.main?.previewCaption && (
                        <p
                            className={
                                classNames(
                                    cls.caption,
                                    cls[`caption--${themeProp || theme}`],
                                )
                            }
                        >
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
    ), [heightEl, className, data, themeProp, theme]);

    return data ? article : skeleton;
};
