import classNames from 'classnames';
import cls from './ListCategory.module.scss';
import {LabelCategory} from '../LabelCategory/LabelCategory';
import {ArticleCategory, ArticleCategorySize} from '../ArticleCategory/ArticleCategory';
import {ArticleCategoryType} from '../../model/types/ArticleCategory';

interface ListCategoryProps {
    className?: string;
    showSkeleton: boolean;
    selectedItem: number | undefined;
    data: ArticleCategoryType[] | undefined;
    selectEvent?: (ArticleCategoryType) => void;
}

export const ListCategory = (props: ListCategoryProps) => {
    const {
        data,
        className,
        selectEvent,
        showSkeleton,
        selectedItem,
    } = props;

    const skeleton = (
        new Array(5).fill(null).map((_, index: number) => (
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
            <LabelCategory
                data={item}
                key={item.id}
                name="category"
                clickEvent={selectEvent}
                isActive={selectedItem === item.id}
            />
        ))
    );

    return (
        <form className={classNames(cls.nav, className)}>
            { showSkeleton ? skeleton : content }
        </form>
    );
};
