import {
    useState,
    useEffect,
} from 'react';
import classNames from 'classnames';
import { ArticleDevType } from '4_entities/Dev';
import { PostArticleType } from '4_entities/Post';
import { Container } from '5_shared/ui/Container';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { AppTheme } from '5_shared/config/ThemeContext';
import { useStickyObserver } from '5_shared/libs/hooks/useStickyObserver';
import grid from '5_shared/css/grid.module.scss';
import { DateInfo } from '5_shared/ui/DateInfo/DateInfo';
import Icon from '5_shared/assets/icons/arrow-scroll.svg';
import { ArticleCategory, ArticleCategorySize } from '4_entities/Category';
import { Share } from '3_features/Share';
import { DetailIntro } from '../DetailIntro/DetailIntro';
import { DetailEditor } from '../DetailEditor/DetailEditor';
import cls from './DetailContent.module.scss';
import {DetailToolbar} from "3_features/DetailContent/ui/DetailToolbar/DetailToolbar";

interface DetailContentProps {
    className?: string;
    isLoading: boolean;
    data?: PostArticleType | ArticleDevType;
}

export const DetailContent = (props: DetailContentProps) => {
    const {
        data,
        className,
        isLoading,
    } = props;

    const { theme } = useTheme();
    const { ref, isSticky } = useStickyObserver();
    const [blockTheme, setBlockTheme] = useState<AppTheme>(theme);

    useEffect(() => {
        if (data?.main?.previewInverted !== undefined) {
            setBlockTheme(
                data.main.previewInverted
                    ? AppTheme.DARK
                    : AppTheme.LIGHT,
            );
        }
    }, [data]);

    return (
        <div
            className={
                classNames(
                    cls.block,
                    cls[`block--${theme}`],
                    className,
                )
            }
        >
            <picture
                hidden={isSticky}
                className={classNames(cls.picture)}
            >
                {
                    data?.main?.preview?.data?.url
                    && (
                        <img src={`${__BASE_URL__}${data?.main?.preview?.data?.url}`} alt="#" />
                    )
                }
            </picture>
            <DetailIntro
                data={data}
                theme={blockTheme}
            />
            <div
                className={classNames(cls['intro-main'])}
            >
                <Container>
                    <DetailToolbar
                        ref={ref}
                        data={data}
                        theme={blockTheme}
                        isSticky={isSticky}
                    />
                    {
                        data?.main?.content
                        && (
                            <DetailEditor
                                data={data.main.content}
                            />
                        )
                    }
                </Container>
            </div>
        </div>
    );
};
