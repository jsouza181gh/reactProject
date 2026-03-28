import { useContext } from "react";
import { ThemeContext } from "../App";

export const Button = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const handleChangeTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light');
    };

    return (
        <div>
            <button onClick={handleChangeTheme}>
                Mudar Tema
            </button>
        </div>
    );
};