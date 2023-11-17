import classNames from 'classnames';
import cls from './Description.module.scss';
import {useTranslation} from "react-i18next";

interface DescriptionProps {
    className?: string
}

export const Description = (props: DescriptionProps) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.block, className)}>
            <p>
                { t('headerDescription') }
            </p>
        </div>
    );
};
