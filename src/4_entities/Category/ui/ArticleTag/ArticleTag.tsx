import classNames from 'classnames';
import cls from './ArticleTag.module.scss';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';

interface ArticleTagProps {
    data: ArticleCategoryType;
    className?: string;
}

export const ArticleTag = (props: ArticleTagProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <span className={classNames(cls.block, className)}>
            #
            { data.title }
        </span>
    );
};
