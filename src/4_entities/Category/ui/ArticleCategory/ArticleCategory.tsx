import classNames from 'classnames';
import cls from './ArticleCategory.module.scss';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';

export enum ArticleCategorySize {
    SMALL = 'small',
    BIG = 'big',
}

interface ArticleCategoryProps {
    className?: string;
    size: ArticleCategorySize;
    data?: ArticleCategoryType;
}

export const ArticleCategory = (props: ArticleCategoryProps) => {
    const {
        data,
        size,
        className,
    } = props;

    const skeleton = (
        <div
            className={
                classNames(
                    cls.block,
                    cls['block--skeleton'],
                    cls[`block--${size}`],
                    className,
                )
            }
        />
    );

    const article = (
        <article
            className={
                classNames(
                    cls.block,
                    cls[`block--${size}`],
                    className,
                )
            }
        >
            {data?.title}
        </article>
    );

    return data ? article : skeleton;
};
