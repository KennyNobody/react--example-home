import { memo } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher = memo((props: LanguageSwitcherProps) => {
    const { className } = props;
    const { i18n } = useTranslation();

    const changeLanguage = (e) => {
        const isChecked = e.target.checked;

        i18n.changeLanguage(isChecked ? 'en' : 'ru');
    };

    return (
        <div className={classNames(cls.LanguageSwitcher, className)}>
            <label className={classNames(cls.label)}>
                <div className={classNames(cls.content)}>
                    <div className={classNames(cls.cell)}>
                        RU
                    </div>
                    <div className={classNames(cls.cell)}>
                        EN
                    </div>
                </div>
                <input
                    type="checkbox"
                    checked={i18n.language === 'en'}
                    className={classNames(cls.input)}
                    onChange={changeLanguage}
                />
                <div className={classNames(cls.button)} />
            </label>
        </div>
    );
});
