import classNames from 'classnames';
import { ImageType } from '5_shared/types/Image';
import cls from './DetailPicture.module.scss';

interface DetailParagraphProps {
    image: ImageType;
}

export const DetailPicture = (props: DetailParagraphProps) => {
    const {
        image,
    } = props;

    // TODO: Добавить srcset
    return (
        <picture className={classNames(cls.picture)}>
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
        </picture>
    );
};
