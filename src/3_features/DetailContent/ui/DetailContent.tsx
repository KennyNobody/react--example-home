import {
    memo,
} from 'react';
import classNames from 'classnames';
import { Share } from '3_features/Share';

import {
    ListTags,
    ArticleCategory,
    ArticleCategorySize,
} from '4_entities/Category';
import { ArticleDevType } from '4_entities/Dev';
import { PostArticleType } from '4_entities/Post';
import grid from '5_shared/css/grid.module.scss';
import { Container } from '5_shared/ui/Container';
import { DateInfo } from '5_shared/ui/DateInfo/DateInfo';
import Icon from '5_shared/assets/icons/arrow-scroll.svg';
import { Editor, EditorMode } from '5_shared/ui/Editor/Editor';
import { useStickyObserver } from '5_shared/libs/hooks/useStickyObserver';
import cls from './DetailContent.module.scss';
import {BlocksRenderer} from "@strapi/blocks-react-renderer";

interface DetailContentProps {
    className?: string;
    isLoading: boolean;
    data?: PostArticleType | ArticleDevType;
}

export const DetailContent = memo((props: DetailContentProps) => {
    const {
        data,
        className,
        isLoading,
    } = props;

    const { ref, isSticky } = useStickyObserver();

    return (
        <div className={classNames(cls.block, className)}>
            <picture
                hidden={isSticky}
                className={classNames(cls.picture)}
            >
                <img src="https://placeholder.pics/svg/3840x2160/292929" alt="#" />
            </picture>
            <div className={classNames(cls.intro)}>
                <Container>
                    <div className={classNames(cls['intro-content'])}>
                        <div className={classNames(grid.grid)}>
                            <div className={classNames(grid['grid__col-2'])}>
                                <h1 className={classNames(cls.title)}>
                                    { data?.main?.previewTitle }
                                    <br />
                                    { data?.main?.previewCaption }
                                </h1>
                            </div>
                            <div className={classNames(grid['grid__col-2'])}>
                                <div className={classNames(cls['toolbar-category'])}>
                                    {
                                        data?.category?.data
                                        && (
                                            <ArticleCategory
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
                                            <ListTags list={data?.tags?.data} />
                                        )
                                    }
                                </div>
                                <div className={classNames(grid['grid__col-1'])}>
                                    {
                                        data?.main?.introCaption
                                        && (
                                            <Editor
                                                mode={EditorMode.PREVIEW}
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
            <div
                className={classNames(cls['intro-main'])}
            >
                <Container>
                    <div
                        ref={ref}
                        id="scroll-anchor"
                        className={
                            classNames(
                                cls.footer,
                                { [cls['footer--fixed']]: isSticky },
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
                                        className={classNames(cls.icon)}
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
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={classNames(cls['intro-editor'])}>
                        <div className={classNames(grid.grid)}>
                            <div className={classNames(grid['grid__col-1'])} />
                            <div className={classNames(grid['grid__col-2'])}>
                                {
                                    data?.main?.content
                                    && (
                                        <BlocksRenderer content={data.main.content} />
                                    )
                                }

                                {/* <Editor mode={EditorMode.REGULAR}> */}
                                {/*     <p> */}
                                {/*         <i> */}
                                {/*             В большом сером доме живут совершенно разные люди. Местные и приезжие. */}
                                {/*             Кто-то заглянул на пару дней, другие тут уже много лет. Они работают, путешествуют или просто отдыхают. */}
                                {/*             Юльке двадцать шесть. Она воздушная гимнастка и тренер. До Махачкалы девушка много переезжала, */}
                                {/*             но пару лет назад нашла свой дом в этом месте. Однажды во время тренировки она упала с */}
                                {/*             гимнастического кольца и сломала спину. Теперь у нее в спине стоят металлические винты, */}
                                {/*             а впереди долгий путь восстановления. */}
                                {/*         </i> */}
                                {/*     </p> */}
                                {/*     <h2> */}
                                {/*         Юлька */}
                                {/*     </h2> */}
                                {/*     <p> */}
                                {/*         Я живу в поселке на окраине Махачкалы. Здесь у нас большой дом - он уже много лет */}
                                {/*         достраивается и вряд ли это когда-то закончится. Какого-то явного идейного подтекста у этого места нет, */}
                                {/*         скорее, коллективная попытка организовать пространство так, чтобы всем было комфортно и интересно. */}
                                {/*         По мере своих сил и желания помогаю - веду страницы в соцсетях, иногда включаюсь в какие-то дела, */}
                                {/*         которые тут происходят. Снимаю пару комнат на первом этаже, одну из которых переоборудовала в спортивный */}
                                {/*         зал. Это позволяет мне планировать свой график и участвовать в общих делах по желанию, а не в */}
                                {/*         обязательном порядке, как это бывает со слишком задержавшимися гостями. Хотя, это вопрос свободного времени. */}
                                {/*     </p> */}
                                {/*     <p> */}
                                {/*         * * * */}
                                {/*     </p> */}
                                {/*     <p> */}
                                {/*         Я живу в поселке на окраине Махачкалы. Здесь у нас большой дом - он уже много лет */}
                                {/*         достраивается и вряд ли это когда-то закончится. Какого-то явного идейного подтекста у этого места нет, */}
                                {/*         скорее, коллективная попытка организовать пространство так, чтобы всем было комфортно и интересно. */}
                                {/*         По мере своих сил и желания помогаю - веду страницы в соцсетях, иногда включаюсь в какие-то дела, */}
                                {/*         которые тут происходят. Снимаю пару комнат на первом этаже, одну из которых переоборудовала в спортивный */}
                                {/*         зал. Это позволяет мне планировать свой график и участвовать в общих делах по желанию, а не в */}
                                {/*         обязательном порядке, как это бывает со слишком задержавшимися гостями. Хотя, это вопрос свободного времени. */}
                                {/*     </p> */}
                                {/*     <p> */}
                                {/*         * * * */}
                                {/*     </p> */}
                                {/*     <p> */}
                                {/*         Я живу в поселке на окраине Махачкалы. Здесь у нас большой дом - он уже много лет */}
                                {/*         достраивается и вряд ли это когда-то закончится. Какого-то явного идейного подтекста у этого места нет, */}
                                {/*         скорее, коллективная попытка организовать пространство так, чтобы всем было комфортно и интересно. */}
                                {/*         По мере своих сил и желания помогаю - веду страницы в соцсетях, иногда включаюсь в какие-то дела, */}
                                {/*         которые тут происходят. Снимаю пару комнат на первом этаже, одну из которых переоборудовала в спортивный */}
                                {/*         зал. Это позволяет мне планировать свой график и участвовать в общих делах по желанию, а не в */}
                                {/*         обязательном порядке, как это бывает со слишком задержавшимися гостями. Хотя, это вопрос свободного времени. */}
                                {/*     </p> */}
                                {/*     <p> */}
                                {/*         * * * */}
                                {/*     </p> */}
                                {/*     <p> */}
                                {/*         Я живу в поселке на окраине Махачкалы. Здесь у нас большой дом - он уже много лет */}
                                {/*         достраивается и вряд ли это когда-то закончится. Какого-то явного идейного подтекста у этого места нет, */}
                                {/*         скорее, коллективная попытка организовать пространство так, чтобы всем было комфортно и интересно. */}
                                {/*         По мере своих сил и желания помогаю - веду страницы в соцсетях, иногда включаюсь в какие-то дела, */}
                                {/*         которые тут происходят. Снимаю пару комнат на первом этаже, одну из которых переоборудовала в спортивный */}
                                {/*         зал. Это позволяет мне планировать свой график и участвовать в общих делах по желанию, а не в */}
                                {/*         обязательном порядке, как это бывает со слишком задержавшимися гостями. Хотя, это вопрос свободного времени. */}
                                {/*     </p> */}
                                {/*     <p> */}
                                {/*         Осень 2020 - весна 2021. */}
                                {/*         {' '} */}
                                {/*         <br /> */}
                                {/*         Республика Дагестан, Махачкала, поселок Семендер. */}
                                {/*     </p> */}
                                {/* </Editor> */}
                            </div>
                            <div className={classNames(grid['grid__col-1'])} />
                        </div>
                    </div>
                </Container>
            </div>

        </div>
        // </DynamicModuleLoader>
    );
});
