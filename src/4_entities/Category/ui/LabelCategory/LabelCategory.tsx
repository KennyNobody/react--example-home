import classNames from 'classnames';
import cls from './LabelCategory.module.scss';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';

interface LabelCategoryProps {
    name?: string;
    className?: string;
    isActive?: boolean;
    data?: ArticleCategoryType;
    clickEvent?: (arg0: ArticleCategoryType | undefined) => void;
}

export const LabelCategory = (props: LabelCategoryProps) => {
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

    const selectEvent = (): void => {
        if (clickEvent) clickEvent(data);
    };

    const unselectEvent = (): void => {
        if (clickEvent && isActive) clickEvent(undefined);
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
                checked={isActive}
                onClick={unselectEvent}
                onChange={selectEvent}
                className={classNames(cls.input)}
            />
            {data?.title}
        </label>
    );

    return data ? article : skeleton;
};
