import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { RouterPath } from '5_shared/config/router/routerConfig';
import cls from './ArticlePost.module.scss';
import { ArticlePostType } from '../../model/types/ArticlePost';

interface ArticlePostProps {
    className?: string;
    data?: ArticlePostType;
}

export const ArticlePost = (props: ArticlePostProps) => {
    const {
        data,
        className,
    } = props;

    const skeleton = (
        <div className={classNames(cls.article, cls['article--skeleton'], className)} />
    );

    const article = (
        <Link
            to={`${RouterPath.detail}${data?.slug}`}
            className={
                classNames(
                    cls.article,
                    className,
                )
            }
        >
            {
                data?.title?.rendered
                && (
                    <h3
                        className={
                            classNames(cls.title)
                        }
                    >
                        { data?.title?.rendered }
                    </h3>
                )
            }
        </Link>
    );

    return data ? article : skeleton;
};
