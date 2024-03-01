import {
    useState,
    useEffect,
} from 'react';
import classNames from 'classnames';
import { ArticleDevType } from '4_entities/Dev';
import { PostArticleType } from '4_entities/Post';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { AppTheme } from '5_shared/config/ThemeContext';
import { Container } from '5_shared/ui/Container/Container';
import { useStickyObserver } from '5_shared/libs/hooks/useStickyObserver';
import cls from './DetailContent.module.scss';
import { DetailIntro } from '../DetailIntro/DetailIntro';
import { DetailEditor } from '../DetailEditor/DetailEditor';
import { DetailToolbar } from '../DetailToolbar/DetailToolbar';

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
