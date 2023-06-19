import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        background: {
            default: '#242424',
        },
    },
    typography: {
        fontFamily: 'Lato, sans-serif',
        h4: {
            '&.title-text': {
                variant: "h4",
                color: "#1976d2",
                fontWeight: "bold",
                textAlign: "center"
            },
        }
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
        MuiContainer: {
            styleOverrides: {
                root: {
                    '&.main-container': {
                        backgroundColor: "#F0F0F0",
                        paddingTop: "7rem",
                        minHeight: '100vh'
                    },
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    '&.table-head': {
                        backgroundColor: "#1976d2",
                    },
                },
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    '&.table-cell-head': {
                        color: "#FFF",
                    },
                }
            }
        }
    },
});

export { theme }