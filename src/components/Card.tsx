import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../App";

type Styles = {
    background: string,
    color: string

}

export const Card = () => {
    const { theme } = useContext(ThemeContext);
    const style: Styles = {
        background:theme == 'light' ? 'white' : 'black',
        color: theme == 'light' ? 'black' : 'white'
    };

    const CardStyle = styled.div<{$theme?: Styles;}>`
        width: 400px;
        height: 400px;
        color: ${p => p.$theme?.color};
        background: ${p => p.$theme?.background}
    `;

    return (
        <CardStyle $theme={style}>
            Meu tema é: {theme}
        </CardStyle>
    );
};