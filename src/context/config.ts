import type { ThemeAction } from "../types/ThemeReducer";
import { themeInitialState, themeReducer } from "./reducers/themeReducer";

export const InitialState = {
    theme: themeInitialState
};

export const Reducers = (state: InitialStateType, action: ActionType) => ({
    theme: themeReducer(state.theme, action)
});

export type InitialStateType = typeof InitialState
export type ActionType = ThemeAction