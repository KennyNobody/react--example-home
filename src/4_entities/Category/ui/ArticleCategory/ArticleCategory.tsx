import classNames from 'classnames';
import { AppTheme } from '5_shared/config/ThemeContext';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import cls from './ArticleCategory.module.scss';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';

export enum ArticleCategoryMode {
    STATIC,
    INPUT,
}

interface ArticleCategoryProps {
    name?: string;
    className?: string;
    isActive?: boolean;
    themeProp?: AppTheme;
    mode: ArticleCategoryMode;
    data?: ArticleCategoryType;
    clickEvent?: (arg0: ArticleCategoryType | undefined) => void;
}

export const ArticleCategory = (props: ArticleCategoryProps) => {
    const {
        data,
        mode,
        name,
        className,
        isActive,
        themeProp,
        clickEvent,
    } = props;

    const { theme } = useTheme();

    const Tag: keyof JSX.IntrinsicElements = mode === ArticleCategoryMode.STATIC ? 'article' : 'label';

    const selectEvent = (): void => {
        if (clickEvent) clickEvent(data);
    };

    const unselectEvent = (): void => {
        if (clickEvent && isActive) clickEvent(undefined);
    };

    const skeleton = (
        <div
            className={
                classNames(
                    cls.block,
                    cls['block--skeleton'],
                    cls[`block--${themeProp || theme}`],
                    className,
                )
            }
        />
    );

    const article = (
        <Tag
            className={
                classNames(
                    cls.block,
                    cls[`block--${themeProp || theme}`],
                    { [cls['block--label']]: mode === ArticleCategoryMode.INPUT },
                    { [cls['block--active']]: isActive },
                    className,
                )
            }
        >
            {
                mode === ArticleCategoryMode.INPUT
                && (
                    <input
                        name={name}
                        type="radio"
                        value={data?.id}
                        checked={isActive}
                        onClick={unselectEvent}
                        onChange={selectEvent}
                        className={classNames(cls.input)}
                    />
                )
            }
            {data?.title}
        </Tag>
    );

    return data ? article : skeleton;
};
