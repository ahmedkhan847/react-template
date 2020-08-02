import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    "palette": {
        "common": {
            "black": "#000",
            "white": "#fff"
        },
        "background": {
            "paper": "#fff",
            "default": "#fafafa"
        },
        "primary": {
            "light": "#7986cb",
            "main": "#3f51b5",
            "dark": "#303f9f",
            "contrastText": "#fff"
        },
        "secondary": {
            "light": "rgba(36, 35, 36, 1)",
            "main": "rgba(1, 0, 11, 1)",
            "dark": "rgba(31, 30, 31, 1)",
            "contrastText": "#fff"
        },
        "error": {
            "light": "#e57373",
            "main": "#f44336",
            "dark": "#d32f2f",
            "contrastText": "#fff"
        },
        "text": {
            "primary": "rgba(0, 0, 0, 0.87)",
            "secondary": "rgba(0, 0, 0, 0.54)",
            "disabled": "rgba(0, 0, 0, 0.38)",
            "hint": "rgba(0, 0, 0, 0.38)"
        }
    }
});