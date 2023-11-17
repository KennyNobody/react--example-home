import classNames from 'classnames';
import cls from './ThemeSwitcher.module.scss';
import {useTheme} from "5_shared/libs/hooks/useTheme";
import {AppTheme} from "5_shared/config/ThemeContext";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { className } = props;
    const {theme, toggleTheme, setThemeManual} = useTheme();
    const changeTheme = (e) => {
        const isChecked = e.target.checked;

        if (isChecked) {
            setThemeManual(AppTheme.DARK)
        } else {
            setThemeManual(AppTheme.LIGHT)
        }
    }

    return (
        <div className={classNames(cls.block, className)}>
            <label>
                <input
                    type="checkbox"
                    onChange={changeTheme}
                    checked={theme === AppTheme.DARK}
                />
                Темная тема
            </label>
        </div>
    );
};
