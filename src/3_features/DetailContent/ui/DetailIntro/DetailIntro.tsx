import classNames from 'classnames';
import {
    ListTags,
    ArticleTag,
    ArticleCategory,
    ArticleCategoryMode,
    ArticleCategoryType,
} from '4_entities/Category';
import { ArticleDevType } from '4_entities/Dev';
import { PostArticleType } from '4_entities/Post';
import { AppTheme } from '5_shared/config/ThemeContext';
import { Container } from '5_shared/ui/Container/Container';
import grid from '5_shared/css/grid.module.scss';
import cls from './DetailIntro.module.scss';
import {useScrollPercent} from "5_shared/libs/hooks/useScrollPercent";
import {useEffect} from "react";

interface DetailIntroProps {
    theme: AppTheme;
    className?: string;
    data?: PostArticleType | ArticleDevType;
}

export const DetailIntro = (props: DetailIntroProps) => {
    const {
        data,
        theme,
        className,
    } = props;

    const opacity = useScrollPercent(1);

    return (
        <div
            className={
                classNames(
                    cls.intro,
                    cls[`intro--${theme}`],
                    className,
                )
            }
        >
            <Container>
                <div
                    hidden={opacity < 0}
                    className={
                        classNames(cls['intro-content'])
                    }
                >
                    <div className={classNames(grid.grid)}>
                        <div
                            className={
                                classNames(
                                    grid['grid__col-2'],
                                    grid['grid__col-lap-3'],
                                    grid['grid__col-mob-4'],
                                    cls['column-title'],
                                )
                            }
                        >
                            <h1 className={classNames(cls.title)}>
                                {data?.main?.previewTitle}
                                <br />
                                {data?.main?.previewCaption}
                            </h1>
                        </div>
                        <div
                            className={
                                classNames(
                                    grid['grid__col-2'],
                                    grid['grid__col-lap-1'],
                                    grid['grid__col-mob-4'],
                                    cls['column-cat'],
                                )
                            }
                        >
                            <div className={classNames(cls['toolbar-category'])}>
                                {
                                    data?.category?.data
                                    && (
                                        <ArticleCategory
                                            themeProp={theme}
                                            data={data?.category?.data}
                                            mode={ArticleCategoryMode.STATIC}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className={classNames(cls['main-content'])}>
                        <div className={classNames(grid.grid, cls.grid)}>
                            <div
                                className={
                                    classNames(
                                        grid['grid__col-2'],
                                        grid['grid__col-mob-4'],
                                    )
                                }
                            >
                                {
                                    data?.tags?.data
                                    && data?.tags?.data?.length > 0
                                    && (
                                        <ListTags>
                                            {data.tags.data.map((item: ArticleCategoryType) => (
                                                <ArticleTag
                                                    data={item}
                                                    key={item.id}
                                                    themeProp={data?.main?.previewInverted ? AppTheme.DARK : AppTheme.LIGHT}
                                                />
                                            ))}
                                        </ListTags>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};
