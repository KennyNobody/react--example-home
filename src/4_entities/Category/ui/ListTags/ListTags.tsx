import classNames from 'classnames';
import cls from './ListTags.module.scss';
import { ArticleTag } from '../ArticleTag/ArticleTag';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';

interface ListTagsProps {
    list: ArticleCategoryType[];
    className?: string;
}

export const ListTags = (props: ListTagsProps) => {
    const {
        list,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            { list && list?.map((item) => <ArticleTag data={item} key={item.id} />) }
        </div>
    );
};
