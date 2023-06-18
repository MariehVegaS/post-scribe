import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: 'Lato, sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
                text: {
                    '&.logo-button, &.header-link-button': {
                        color: '#fff',
                        '&:hover': {
                            color: '#90caf9',
                        }
                    },
                    '&.logo-button': {
                        fontSize: '2.125rem',
                        fontWeight: 'bold',
                    },
                    '&.header-link-button': {
                        fontSize: '1.25rem',
                    }
                }
            },
        },
    },
});

export { theme }