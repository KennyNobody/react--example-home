import { useEffect } from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import {
    ArticleCategory,
    ArticleCategorySize,
} from '4_entities/Category';
import { useFetchPostById } from '4_entities/Post';
import { Main } from '5_shared/ui/Main/Main';
import { Toolbar } from '5_shared/ui/Toolbar';
import { Container } from '5_shared/ui/Container';
import { DateInfo } from '5_shared/ui/DateInfo/DateInfo';
import Icon from '5_shared/assets/icons/arrow-scroll.svg'
import { ContentKeyType } from '5_shared/types/CommonTypes';
import cls from './DetailPage.module.scss';

interface DetailPageProps {
    mode: ContentKeyType;
}

function DetailPage({ mode }: DetailPageProps) {
    const { slug } = useParams<{ slug: string }>();
    const { data, isLoading } = useFetchPostById(slug || 'none');

    useEffect(() => {
        console.log('Вот такой slug получили: ', slug);
    }, [slug]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <Main className={classNames(cls.main)}>
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
                        <div className={classNames(cls.footer)}>
                            <DateInfo
                                date={data?.publishedAt}
                                className={classNames(cls.time)}
                            />
                            <button
                                type="button"
                                className={classNames(cls.button)}
                            >
                                <Icon
                                    className={classNames(cls.icon)}
                                />
                            </button>
                            <div className={classNames(cls.share)}>
                                Поделиться
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Main>
    );
}

export default DetailPage;
