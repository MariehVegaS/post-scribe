import React from 'react'
import { AppBar, Toolbar } from "@mui/material";
import { Outlet } from 'react-router-dom'

const Layout = () => {
    const displayDesktop = () => {
        return <Toolbar>PostScribe</Toolbar>;
    };
    return (
        <>
            <header>
                <AppBar>{displayDesktop()}</AppBar>
                <Outlet />
            </header>

        </>
    )
}

export default Layout