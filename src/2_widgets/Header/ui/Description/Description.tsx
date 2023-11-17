import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './Description.module.scss';

interface DescriptionProps {
    className?: string
}

export function Description(props: DescriptionProps) {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.block, className)}>
            <p>
                { t('headerDescription') }
            </p>
        </div>
    );
}
