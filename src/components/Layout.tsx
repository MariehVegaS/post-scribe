import React from 'react'
import { AppBar, Toolbar, Typography, Button, ThemeProvider, Stack, Container } from "@mui/material";
import { Outlet, Link } from 'react-router-dom'
import { theme } from '../assets/styles/theme';

const toolbarLinks = [
    {
        label: "About",
        href: "/about",
    }
]

const Layout = () => {
    const toolbarDesktop = () => {
        return <Toolbar>
            <Stack width='100%' direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                {postScriptLogo}
                {getMenuButtons()}
            </Stack>
        </Toolbar>;
    };
    const postScriptLogo = (
        <Button
            className='logo-button'
            variant='text'
            to="/"
            component={Link}
            disableRipple
        >
            PostScribe
        </Button>
    );
    const getMenuButtons = () => {
        return toolbarLinks.map(({ label, href }) => {
            return (
                <Button
                    className='header-link-button'
                    variant='text'
                    key={label}
                    to={href}
                    component={Link}
                >
                    {label}
                </Button>
            );
        });
    }
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed">{toolbarDesktop()}</AppBar>
            <div style={{ paddingTop: '64px' }}>
                <Container maxWidth="lg">
                    <Outlet />
                </Container>
            </div>
        </ThemeProvider>
    )
}

export default Layout