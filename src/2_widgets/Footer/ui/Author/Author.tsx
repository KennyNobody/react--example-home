import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './Author.module.scss';

interface AuthorProps {
    className?: string
}

export function Author(props: AuthorProps) {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.block, className)}>
            { t('footerAuthor') }
        </div>
    );
}
