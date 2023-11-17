import classNames from 'classnames';
import cls from './LanguageSwitcher.module.scss';
import {useTranslation} from "react-i18next";

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher = (props: LanguageSwitcherProps) => {
    const { className } = props;
    const { i18n } = useTranslation();

    const changeLanguage = (e) => {
        const isChecked = e.target.checked;

        i18n.changeLanguage(isChecked ? 'en' : 'ru');
    }

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
                <div className={classNames(cls.button)}></div>
            </label>
        </div>
    );
};
