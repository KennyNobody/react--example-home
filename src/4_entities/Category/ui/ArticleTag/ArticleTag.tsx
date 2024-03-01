import classNames from 'classnames';
import cls from './ArticleTag.module.scss';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';
import { AppTheme } from '5_shared/config/ThemeContext';
import { useTheme } from '5_shared/libs/hooks/useTheme';

interface ArticleTagProps {
    data: ArticleCategoryType;
    className?: string;
    themeProp?: AppTheme;
}

export const ArticleTag = (props: ArticleTagProps) => {
    const {
        data,
        className,
        themeProp,
    } = props;

    const { theme } = useTheme();

    return (
        <span
            className={
                classNames(
                    cls.block,
                    cls[`block--${themeProp || theme}`],
                    className,
                )
            }
        >
            #
            { data.title }
        </span>
    );
};
