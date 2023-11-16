import {
    ReactNode,
    useMemo,
    useState
} from "react";
import {
    AppTheme,
    ThemeContext,
    LOCAL_STORAGE_THEME_KEY
} from "./ThemeContext";

interface ThemeProviderProps {
    children: ReactNode;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as AppTheme || AppTheme.LIGHT;

const ThemeProvider = (props: ThemeProviderProps) => {
    const [theme, setTheme] = useState<AppTheme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme: theme,
            setTheme: setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            { props.children }
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
