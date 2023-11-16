import {createContext} from "react";

export enum AppTheme {
    LIGHT = 'app-theme-light',
    DARK = 'app-theme-dark,'
}

export interface ThemeContextProps {
    theme?: AppTheme;
    setTheme?: (theme: AppTheme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({

});

export const LOCAL_STORAGE_THEME_KEY = 'app-theme';
