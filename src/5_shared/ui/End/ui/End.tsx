import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './End.module.scss';

interface EndProps {
    className?: string;
}

export const End = (props: EndProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <p className={classNames(cls.block, className)}>
            { t('articlesMessage') }
        </p>
    );
};
