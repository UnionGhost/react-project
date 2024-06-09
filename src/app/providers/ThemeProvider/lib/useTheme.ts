import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";

interface UseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
    anotherTheme: Theme;
}

const useTheme = (): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext);
    const anotherTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    const toggleTheme = () => {
        setTheme(anotherTheme);

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, anotherTheme);
    }

    return {theme, toggleTheme, anotherTheme};
};

export default useTheme;