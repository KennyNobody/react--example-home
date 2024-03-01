import classNames from 'classnames';
import cls from './ArticleTag.module.scss';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';
import { AppTheme } from '5_shared/config/ThemeContext';

interface ArticleTagProps {
    data: ArticleCategoryType;
    className?: string;
    isInverted: boolean;
}

export const ArticleTag = (props: ArticleTagProps) => {
    const {
        data,
        className,
        isInverted,
    } = props;

    const theme = isInverted ? AppTheme.DARK : AppTheme.LIGHT;

    return (
        <span
            className={
                classNames(
                    cls.block,
                    cls[`block--${theme}`],
                    className,
                )
            }
        >
            #
            { data.title }
        </span>
    );
};
