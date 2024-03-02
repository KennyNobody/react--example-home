import classNames from 'classnames';
import {
    ListTags,
    ArticleTag,
    ArticleCategory,
    ArticleCategorySize,
    ArticleCategoryType,
} from '4_entities/Category';
import { ArticleDevType } from '4_entities/Dev';
import { PostArticleType } from '4_entities/Post';
import { Editor } from '5_shared/ui/Editor/Editor';
import { AppTheme } from '5_shared/config/ThemeContext';
import { Container } from '5_shared/ui/Container/Container';
import grid from '5_shared/css/grid.module.scss';
import cls from './DetailIntro.module.scss';

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
                <div className={classNames(cls['intro-content'])}>
                    <div className={classNames(grid.grid)}>
                        <div className={classNames(grid['grid__col-2'])}>
                            <h1 className={classNames(cls.title)}>
                                {data?.main?.previewTitle}
                                <br />
                                {data?.main?.previewCaption}
                            </h1>
                        </div>
                        <div className={classNames(grid['grid__col-2'])}>
                            <div className={classNames(cls['toolbar-category'])}>
                                {
                                    data?.category?.data
                                    && (
                                        <ArticleCategory
                                            themeProp={theme}
                                            data={data?.category?.data}
                                            size={ArticleCategorySize.BIG}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className={classNames(cls['main-content'])}>
                        <div className={classNames(grid.grid, cls.grid)}>
                            <div className={classNames(grid['grid__col-2'])}>
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
                            <div className={classNames(grid['grid__col-1'])}>
                                {
                                    data?.main?.introCaption
                                    && (
                                        <Editor
                                            data={data.main.introCaption}
                                        />
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
