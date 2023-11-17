import {useContext} from "react";
import {AppTheme, LOCAL_STORAGE_THEME_KEY, ThemeContext} from "../../config/ThemeContext";

interface useThemeResult {
    theme: AppTheme;
    toggleTheme: () => void;
    setThemeManual: (theme: AppTheme) => void;
}

export function useTheme(): useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const actualTheme: AppTheme = theme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK;
        if (setTheme) {
            setTheme(actualTheme);
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, actualTheme);
        }
    }

    const setThemeManual = (theme: AppTheme) => {
        if (setTheme) {
            setTheme(theme);
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
        }

    }

    return <useThemeResult>{
        theme, toggleTheme, setThemeManual
    }
}
