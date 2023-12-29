import classNames from 'classnames';
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
        <div className={classNames(cls.article, className)} />
    );

    const article = (
        <div className={classNames(cls.article, className)}>
            { data?.title?.rendered }
        </div>
    );

    return data ? article : skeleton;
};
