import classNames from 'classnames';
import cls from './ArticleCategory.module.scss';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';

interface ArticleCategoryProps {
    className?: string;
    isActive?: boolean;
    data?: ArticleCategoryType;
    clickEvent?: (ArticleCategoryType) => void;
}

export const ArticleCategory = (props: ArticleCategoryProps) => {
    const {
        data,
        className,
        isActive,
        clickEvent,
    } = props;

    const skeleton = (
        <div className={classNames(cls.link, cls['link--skeleton'], className)} />
    );

    const onClickEvent = () => {
        if (clickEvent) clickEvent(data);
    };

    const article = (
        <button
            type="button"
            onClick={onClickEvent}
            className={
                classNames(
                    cls.link,
                    {
                        [cls['link--active']]: isActive,
                    },
                    className,
                )
            }
        >
            {data?.name}
        </button>
    );

    return data ? article : skeleton;
};
