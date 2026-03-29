// Initial State
export type ThemeState = {
    theme : 'light' | 'dark'
}

// Actions
type ChangeTheme = {
    type: 'CHANGE_THEME',
    payload: ThemeState['theme']
}

//Export all actions
export type ThemeAction = ChangeTheme