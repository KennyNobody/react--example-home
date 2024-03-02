import classNames from 'classnames';
import cls from './GridCategory.module.scss';
import {
    ArticleCategory,
    ArticleCategorySize,
} from '../ArticleCategory/ArticleCategory';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';

interface GridCategoryProps {
    className?: string;
    showSkeleton: boolean;
    data: ArticleCategoryType[];
}

export const GridCategory = (props: GridCategoryProps) => {
    const {
        data,
        className,
        showSkeleton,
    } = props;

    const skeleton = (
        new Array(4).fill(null).map((_, index: number) => (
            <ArticleCategory
                key={index}
                size={ArticleCategorySize.BIG}
            />
        ))
    );

    const content = (
        data
        && data?.length > 0
        && data.map((item: ArticleCategoryType) => (
            <ArticleCategory
                data={item}
                key={item.id}
                size={ArticleCategorySize.BIG}
            />
        ))
    );

    return (
        <div className={classNames(cls.block, className)}>
            { showSkeleton ? skeleton : content }
        </div>
    );
};
