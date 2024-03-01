import classNames from 'classnames';
import { AppTheme } from '5_shared/config/ThemeContext';
import { useTheme } from '5_shared/libs/hooks/useTheme';
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
    themeProp?: AppTheme;
}

export const ArticleCategory = (props: ArticleCategoryProps) => {
    const {
        data,
        size,
        className,
        themeProp,
    } = props;

    const { theme } = useTheme();

    const skeleton = (
        <div
            className={
                classNames(
                    cls.block,
                    cls['block--skeleton'],
                    cls[`block--${size}`],
                    cls[`block--${themeProp || theme}`],
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
                    cls[`block--${themeProp || theme}`],
                    className,
                )
            }
        >
            {data?.title}
        </article>
    );

    return data ? article : skeleton;
};
