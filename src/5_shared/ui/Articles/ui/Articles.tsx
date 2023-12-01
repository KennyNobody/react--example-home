import classNames from 'classnames';
import { ReactNode } from 'react';
import cls from './Articles.module.scss';
import {useTranslation} from "react-i18next";

interface ArticlesProps {
    className?: string;
    children: ReactNode;
    hasMore?: boolean;
    onClickEvent: () => void;
}

export const Articles = (props: ArticlesProps) => {
    const {
        hasMore,
        children,
        className,
        onClickEvent,
    } = props;

    const { t } = useTranslation();

    const message = (
        <p>
            { t('articlesMessage')}
        </p>
    );

    return (
        <div className={classNames(cls.block, className)}>
            <div className={classNames(cls.main)}>
                { children }
            </div>
            {
                hasMore
                && (
                    <button
                        type="button"
                        onClick={onClickEvent}
                        className={classNames(cls.button)}
                    >
                        Подгрузить
                    </button>
                )
            }
            {
                !hasMore && message
            }
        </div>
    );
};
