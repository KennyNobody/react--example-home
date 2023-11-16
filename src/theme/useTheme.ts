import {AppTheme, LOCAL_STORAGE_THEME_KEY, ThemeContext} from "./ThemeContext";
import {useContext} from "react";
import App from "../App";

interface useThemeResult {
    theme: AppTheme;
    toggleTheme: () => void;
}

export function useTheme(): useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const actualTheme: AppTheme = theme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK;
        setTheme(actualTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, actualTheme);
    }

    return {
        theme, toggleTheme
    }
}
