import classNames from 'classnames';
import cls from './ArticleCategory.module.scss';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';

interface ArticleCategoryProps {
    className?: string;
    data?: ArticleCategoryType;
}

export const ArticleCategory = (props: ArticleCategoryProps) => {
    const {
        data,
        className,
    } = props;

    const skeleton = (
        <div className={classNames(cls.link, cls['link--skeleton'], className)} />
    );

    const article = (
        <article
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            {data?.title}
        </article>
    );

    return data ? article : skeleton;
};
