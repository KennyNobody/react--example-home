import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { ArticleCategory, ArticleCategorySize, ListTags } from '4_entities/Category';
import { useFetchPostById } from '4_entities/Post';
import { Main } from '5_shared/ui/Main/Main';
import { Toolbar } from '5_shared/ui/Toolbar';
import grid from '5_shared/css/grid.module.scss';
import { Container } from '5_shared/ui/Container';
import { DateInfo } from '5_shared/ui/DateInfo/DateInfo';
import Icon from '5_shared/assets/icons/arrow-scroll.svg';
import { ContentKeyType } from '5_shared/types/CommonTypes';
import { Editor, EditorMode } from '5_shared/ui/Editor/Editor';
import { useStickyObserver } from '5_shared/libs/hooks/useStickyObserver';
import { MutableRefObject, useEffect, useRef } from 'react';
import cls from './DetailPage.module.scss';
import {Share} from "3_features/Share";
import useTime from "5_shared/libs/hooks/useTime";
import {useTranslation} from "react-i18next";

interface DetailPageProps {
    mode: ContentKeyType;
}

function DetailPage({ mode }: DetailPageProps) {
    const { i18n } = useTranslation();
    const lang = i18n.language;

    const { slug } = useParams<{ slug: string }>();
    const { data, isLoading } = useFetchPostById(slug || 'none');
    const { ref, isSticky } = useStickyObserver();
    const time = useTime(data?.publishedAt, lang);

    return (
        <Main className={classNames(cls.main)}>
            <picture
                hidden={isSticky}
                className={classNames(cls.picture)}
            >
                <img src="https://placeholder.pics/svg/3840x2160/292929" alt="#" />
            </picture>
            <div className={classNames(cls.intro)}>
                <Container>
                    <div className={classNames(cls['intro-content'])}>
                        <Toolbar className={classNames(cls.toolbar)}>
                            <h1 className={classNames(cls.title)}>
                                { data?.title || '...'}
                            </h1>
                            {
                                data?.category?.data
                                && (
                                    <ArticleCategory
                                        data={data?.category?.data}
                                        size={ArticleCategorySize.BIG}
                                    />
                                )
                            }
                        </Toolbar>
                        <div className={classNames(cls['main-content'])}>
                            <div className={classNames(grid.grid, cls.grid)}>
                                <div className={classNames(grid['grid__col-2'])}>
                                    <ListTags list={data?.tags?.data} />
                                </div>
                                <div className={classNames(grid['grid__col-1'])}>
                                    <Editor
                                        mode={EditorMode.PREVIEW}
                                    >
                                        <p>
                                            В большом сером доме живут совершенно разные люди. Местные и приезжие. Кто-то заглянул на пару дней, другие тут уже много лет. Они работают, путешествуют или просто отдыхают. Юльке двадцать шесть. Она воздушная гимнастка и тренер. До Махачкалы девушка много переезжала, но пару лет назад нашла свой дом в этом месте. Однажды во время тренировки она упала с гимнастического кольца и сломала спину. Теперь у нее в спине стоят металлические винты, а впереди долгий путь восстановления.
                                        </p>
                                    </Editor>
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
                        className={
                            classNames(
                                cls.footer,
                                { [cls['footer--fixed']]: isSticky },
                            )
                        }
                    >
                        <div className={grid.grid}>
                            <div className={grid['grid__col-1']}>
                                {
                                    data?.publishedAt
                                    && (
                                        <DateInfo
                                            date={time}
                                            className={classNames(cls.time)}
                                        />
                                    )
                                }
                            </div>
                            <div className={grid['grid__col-2']}>
                                <button
                                    type="button"
                                    hidden={isSticky}
                                    className={classNames(cls.button)}
                                >
                                    <Icon
                                        className={classNames(cls.icon)}
                                    />
                                </button>
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
                                <Editor mode={EditorMode.REGULAR}>
                                    <p>
                                        <i>
                                            В большом сером доме живут совершенно разные люди. Местные и приезжие.
                                            Кто-то заглянул на пару дней, другие тут уже много лет. Они работают, путешествуют или просто отдыхают.
                                            Юльке двадцать шесть. Она воздушная гимнастка и тренер. До Махачкалы девушка много переезжала,
                                            но пару лет назад нашла свой дом в этом месте. Однажды во время тренировки она упала с
                                            гимнастического кольца и сломала спину. Теперь у нее в спине стоят металлические винты,
                                            а впереди долгий путь восстановления.
                                        </i>
                                    </p>
                                    <h2>
                                        Юлька
                                    </h2>
                                    <p>
                                        Я живу в поселке на окраине Махачкалы. Здесь у нас большой дом - он уже много лет
                                        достраивается и вряд ли это когда-то закончится. Какого-то явного идейного подтекста у этого места нет,
                                        скорее, коллективная попытка организовать пространство так, чтобы всем было комфортно и интересно.
                                        По мере своих сил и желания помогаю - веду страницы в соцсетях, иногда включаюсь в какие-то дела,
                                        которые тут происходят. Снимаю пару комнат на первом этаже, одну из которых переоборудовала в спортивный
                                        зал. Это позволяет мне планировать свой график и участвовать в общих делах по желанию, а не в
                                        обязательном порядке, как это бывает со слишком задержавшимися гостями. Хотя, это вопрос свободного времени.
                                    </p>
                                    <p>
                                        * * *
                                    </p>
                                    <p>
                                        Я живу в поселке на окраине Махачкалы. Здесь у нас большой дом - он уже много лет
                                        достраивается и вряд ли это когда-то закончится. Какого-то явного идейного подтекста у этого места нет,
                                        скорее, коллективная попытка организовать пространство так, чтобы всем было комфортно и интересно.
                                        По мере своих сил и желания помогаю - веду страницы в соцсетях, иногда включаюсь в какие-то дела,
                                        которые тут происходят. Снимаю пару комнат на первом этаже, одну из которых переоборудовала в спортивный
                                        зал. Это позволяет мне планировать свой график и участвовать в общих делах по желанию, а не в
                                        обязательном порядке, как это бывает со слишком задержавшимися гостями. Хотя, это вопрос свободного времени.
                                    </p>
                                    <p>
                                        * * *
                                    </p>
                                    <p>
                                        Я живу в поселке на окраине Махачкалы. Здесь у нас большой дом - он уже много лет
                                        достраивается и вряд ли это когда-то закончится. Какого-то явного идейного подтекста у этого места нет,
                                        скорее, коллективная попытка организовать пространство так, чтобы всем было комфортно и интересно.
                                        По мере своих сил и желания помогаю - веду страницы в соцсетях, иногда включаюсь в какие-то дела,
                                        которые тут происходят. Снимаю пару комнат на первом этаже, одну из которых переоборудовала в спортивный
                                        зал. Это позволяет мне планировать свой график и участвовать в общих делах по желанию, а не в
                                        обязательном порядке, как это бывает со слишком задержавшимися гостями. Хотя, это вопрос свободного времени.
                                    </p>
                                    <p>
                                        * * *
                                    </p>
                                    <p>
                                        Я живу в поселке на окраине Махачкалы. Здесь у нас большой дом - он уже много лет
                                        достраивается и вряд ли это когда-то закончится. Какого-то явного идейного подтекста у этого места нет,
                                        скорее, коллективная попытка организовать пространство так, чтобы всем было комфортно и интересно.
                                        По мере своих сил и желания помогаю - веду страницы в соцсетях, иногда включаюсь в какие-то дела,
                                        которые тут происходят. Снимаю пару комнат на первом этаже, одну из которых переоборудовала в спортивный
                                        зал. Это позволяет мне планировать свой график и участвовать в общих делах по желанию, а не в
                                        обязательном порядке, как это бывает со слишком задержавшимися гостями. Хотя, это вопрос свободного времени.
                                    </p>
                                    <p>
                                        Осень 2020 - весна 2021.
                                        {' '}
                                        <br />
                                        Республика Дагестан, Махачкала, поселок Семендер.
                                    </p>
                                </Editor>
                            </div>
                            <div className={classNames(grid['grid__col-1'])} />
                        </div>
                    </div>
                </Container>
            </div>
        </Main>
    );
}

export default DetailPage;
