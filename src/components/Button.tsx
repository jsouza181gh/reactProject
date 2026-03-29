import { useContext } from "react";
import { Context } from "../context/Context";

export const Button = () => {
    const { state, dispatch } = useContext(Context);

    const handleClick = () => {
        if (state.theme.theme == 'dark') {
            dispatch({type: 'CHANGE_THEME', payload: 'light'});
        } else {
            dispatch({type: 'CHANGE_THEME', payload: 'dark'});
        }
    };

    const style = {
        background: state.theme.theme == 'light' ? 'white' : 'black',
        color: state.theme.theme == 'light' ? 'black' : 'white'
    }; 

    return (
        <div>
            <h2 style={style}>Meu tema é: {state.theme.theme}</h2><br />
            <button onClick={handleClick}>Trocar Tema</button>
        </div>
    );
};