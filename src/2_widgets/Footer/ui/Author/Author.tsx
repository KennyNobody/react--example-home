import classNames from 'classnames';
import cls from './Author.module.scss';
import {useTranslation} from "react-i18next";

interface AuthorProps {
    className?: string
}

export const Author = (props: AuthorProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.block, className)}>
            { t('footerAuthor') }
        </div>
    );
};
