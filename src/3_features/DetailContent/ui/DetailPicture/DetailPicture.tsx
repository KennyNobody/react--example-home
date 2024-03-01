import { useEffect } from 'react';
import classNames from 'classnames';
import { ImageType } from '5_shared/types/Image';
import cls from './DetailPicture.module.scss';
import {EditorWrapper} from "5_shared/ui/EditorWrapper/EditorWrapper";
import {useTheme} from "5_shared/libs/hooks/useTheme";

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
                    <img src={`${__BASE_URL__}${image?.formats?.large?.url}`} alt={image?.alternativeText || '#'} />
                )
            }
            {
                !image?.formats?.large?.url
                && image?.formats?.medium?.url
                && (
                    <img src={`${__BASE_URL__}${image?.formats?.medium?.url}`} alt={image?.alternativeText || '#'} />
                )
            }
            <figcaption className={classNames(cls.figcaption)}>
                <EditorWrapper>
                    {
                        image?.alternativeText
                        && (
                            <p className={classNames(cls.text)}>
                                { image.alternativeText }
                            </p>
                        )
                    }
                    {
                        image?.caption
                        && (
                            <p className={classNames(cls.caption, cls[`caption--${theme}`])}>
                                { image.caption }
                            </p>
                        )
                    }
                </EditorWrapper>
            </figcaption>

        </figure>
    );
};
