import classNames from 'classnames';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { AppTheme } from '5_shared/config/ThemeContext';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
    const { className } = props;
    const { theme, setThemeManual } = useTheme();
    const changeTheme = (e) => {
        const isChecked = e.target.checked;

        if (isChecked) {
            setThemeManual(AppTheme.DARK);
        } else {
            setThemeManual(AppTheme.LIGHT);
        }
    };

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
}
