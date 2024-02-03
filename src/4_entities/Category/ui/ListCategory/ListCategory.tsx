import classNames from 'classnames';
import cls from './ListCategory.module.scss';
import { ArticleCategory } from '../ArticleCategory/ArticleCategory';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';

interface ListCategoryProps {
    className?: string;
    showSkeleton: boolean;
    selectedItems?: number[];
    data: ArticleCategoryType[] | undefined;
    selectEvent?: (ArticleCategoryType) => void;
}

export const ListCategory = (props: ListCategoryProps) => {
    const {
        data,
        className,
        selectEvent,
        showSkeleton,
        selectedItems,
    } = props;

    const skeleton = (
        new Array(9).fill(null).map((_, index: number) => (
            <ArticleCategory
                key={index}
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
                clickEvent={selectEvent}
                isActive={selectedItems?.includes(item.id)}
            />
        ))
    );

    return (
        <div className={classNames(cls.nav, className)}>
            { showSkeleton ? skeleton : content }
        </div>
    );
};
