import classNames from 'classnames';
import { ImageType } from '5_shared/types/Image';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { EditorWrapper } from '5_shared/ui/EditorWrapper/EditorWrapper';
import cls from './DetailPicture.module.scss';

interface DetailParagraphProps {
    image: ImageType;
}

export const DetailPicture = (props: DetailParagraphProps) => {
    const {
        image,
    } = props;

    const { theme } = useTheme();

    // TODO: Добавить srcset
    return (
        <figure className={classNames(cls.figure)}>
            {
                image?.formats?.large?.url
                && (
                    <img
                        src={`${__BASE_URL__}${image?.formats?.large?.url}`}
                        alt={image?.alternativeText || '#'}
                    />
                )
            }
            {
                !image?.formats?.large?.url
                && image?.formats?.medium?.url
                && (
                    <img
                        src={`${__BASE_URL__}${image?.formats?.medium?.url}`}
                        alt={image?.alternativeText || '#'}
                    />
                )
            }
            {
                !image?.formats?.large?.url
                && !image?.formats?.medium?.url
                && image?.formats?.small?.url
                && (
                    <img
                        src={`${__BASE_URL__}${image?.formats?.small?.url}`}
                        alt={image?.alternativeText || '#'}
                    />
                )
            }
            <figcaption className={classNames(cls.figcaption)}>
                <EditorWrapper>
                    {
                        image?.caption
                        && (
                            <p className={classNames(cls.text)}>
                                { image.caption }
                            </p>
                        )
                    }
                    {
                        image?.alternativeText
                        && (
                            <p className={classNames(cls.caption, cls[`caption--${theme}`])}>
                                { image.alternativeText }
                            </p>
                        )
                    }
                </EditorWrapper>
            </figcaption>
        </figure>
    );
};
