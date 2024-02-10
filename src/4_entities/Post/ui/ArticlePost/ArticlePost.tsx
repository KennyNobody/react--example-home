import { useRef } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
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

    const skeleton = (
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
    );

    const article = (
        <Link
            ref={elRef}
            style={{
                height: `${heightEl}px`, width: '100%',
            }}
            to={`${RouterPath.detail}${data?.slug}`}
            className={
                classNames(
                    cls.article,
                    className,
                )
            }
        >
            {
                data?.title
                && (
                    <h3
                        className={
                            classNames(cls.title)
                        }
                    >
                        { data.title }
                    </h3>
                )
            }
        </Link>
    );

    return data ? article : skeleton;
};
