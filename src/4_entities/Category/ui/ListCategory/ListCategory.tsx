import classNames from 'classnames';
import cls from './ListCategory.module.scss';
import { ArticleCategory } from '../ArticleCategory/ArticleCategory';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';

interface ListCategoryProps {
    className?: string;
    data: ArticleCategoryType[];
    showSkeleton?: boolean;
    selectEvent?: (ArticleCategoryType) => void;
    selectedItems?: number[];
}

export const ListCategory = (props: ListCategoryProps) => {
    const {
        data,
        showSkeleton,
        className,
        selectEvent,
        selectedItems,
    } = props;

    const skeleton = (
        <>
            {
                new Array(9).fill(null).map((_, index: number) => (
                    <ArticleCategory
                        key={index}
                    />
                ))
            }
        </>
    );

    const content = (
        <>
            {
                data.map((item: ArticleCategoryType) => (
                    <ArticleCategory
                        data={item}
                        key={item.id}
                        clickEvent={selectEvent}
                        isActive={selectedItems?.includes(item.id)}
                    />
                ))
            }
        </>
    );

    return (
        <div className={classNames(cls.nav, className)}>
            { showSkeleton ? skeleton : content }
        </div>
    );
};
