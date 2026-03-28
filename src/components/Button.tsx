import { useContext } from "react";
import { ThemeContext } from "../App";

export const Button = () => {
    const theme = useContext(ThemeContext);
    return (
        <h2>Meu tema é: {theme}</h2>
    );
};