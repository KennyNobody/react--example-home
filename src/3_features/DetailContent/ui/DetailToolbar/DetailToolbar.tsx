import {ForwardedRef, forwardRef,} from 'react';
import classNames from 'classnames';
import {Share} from '3_features/Share';
import grid from '5_shared/css/grid.module.scss';
import {DateInfo} from '5_shared/ui/DateInfo/DateInfo';
import Icon from '5_shared/assets/icons/arrow-scroll.svg';
import {ArticleCategory, ArticleCategorySize} from '4_entities/Category';
import {AppTheme} from '5_shared/config/ThemeContext';
import {PostArticleType} from '4_entities/Post';
import {ArticleDevType} from '4_entities/Dev';
import cls from './DetailToolbar.module.scss';

interface DetailToolbarProps {
    theme: AppTheme;
    isSticky: boolean;
    className?: string;
    data: PostArticleType | ArticleDevType | undefined;
}

export const DetailToolbar = forwardRef((props: DetailToolbarProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
        data,
        theme,
        isSticky,
        className,
    } = props;

    return (
        <div
            ref={ref}
            id="scroll-anchor"
            className={
                classNames(
                    cls.footer,
                    { [cls['footer--fixed']]: isSticky },
                    cls[`footer--${theme}`],
                    className,
                )
            }
        >
            <div className={classNames(grid.grid, cls['footer-grid'])}>
                <div className={grid['grid__col-1']}>
                    {
                        data?.publishedAt
                        && (
                            <DateInfo
                                date={data?.publishedAt}
                                className={classNames(cls.time)}
                            />
                        )
                    }
                </div>
                <div className={grid['grid__col-2']}>
                    <a
                        hidden={isSticky}
                        href="#scroll-anchor"
                        className={classNames(cls.button)}
                    >
                        <Icon
                            className={
                                classNames(
                                    cls.icon,
                                    cls[`icon--${theme}`],
                                )
                            }
                        />
                    </a>
                    <div
                        hidden={!isSticky}
                        className={classNames(cls.caption)}
                    >
                        <h3 className={classNames(cls.titleCaption)}>
                            { data?.title }
                        </h3>
                        {
                            data?.category?.data
                            && (
                                <ArticleCategory
                                    data={data?.category?.data}
                                    size={ArticleCategorySize.SMALL}
                                />
                            )
                        }
                    </div>
                </div>
                <div className={grid['grid__col-1']}>
                    <div className={classNames(cls['share-column'])}>
                        <Share
                            className={classNames(cls.share)}
                            theme={isSticky ? AppTheme.DARK : theme}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});
