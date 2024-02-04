import classNames from 'classnames';
import cls from './ArticleCategory.module.scss';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';

interface ArticleCategoryProps {
    name?: string;
    className?: string;
    isActive?: boolean;
    data?: ArticleCategoryType;
    clickEvent?: (ArticleCategoryType) => void;
}

export const ArticleCategory = (props: ArticleCategoryProps) => {
    const {
        name,
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
        <label
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
            <input
                name={name}
                type="radio"
                value={data?.id}
                onChange={onClickEvent}
            />
            {data?.title}
        </label>
    );

    return data ? article : skeleton;
};
