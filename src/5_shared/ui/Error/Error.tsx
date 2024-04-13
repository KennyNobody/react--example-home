import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import image from '5_shared/assets/images/cat.jpg';
import cls from './Error.module.scss';

interface ErrorProps {
    className?: string
}

export const Error = (props: ErrorProps) => {
    const { className } = props;
    const { t } = useTranslation();

    // eslint-disable-next-line no-restricted-globals
    const reloadPage = () => location.reload();

    return (
        <div className={classNames(cls.block, className)}>
            <picture className={classNames(cls.picture)}>
                {
                    image && <img src={image} alt={t('titleBroken')} />
                }
            </picture>
            <h2 className={classNames(cls.title)}>
                { t('titleBroken') }
            </h2>
            <p className={classNames(cls.caption)}>
                { t('captionBroken') }
            </p>
            <button
                type="button"
                onClick={reloadPage}
                className={classNames(cls.button)}
            >
                { t('linkBroken') }
            </button>
        </div>
    );
};
