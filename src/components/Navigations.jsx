/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link, Routes, Route } from "react-router-dom";
import RegisterForm from "./Register";
import LoginForm from "./Login";
import SingleBook from "./SingleBook";
import { AppBar, Button, Stack, Typography } from "@mui/material";
import bookLogo from '../assets/books.png';

const Navbar = () => {
    return (
        <>
            <AppBar position="static" sx={{p: 1}}>
                <Stack direction="row" useFlexGap flexWrap="wrap">
                    <img id="logo-image" src={bookLogo} />
                    <Typography variant ="h4" sx={{flexGrow: 1}}>
                        Library App
                    </Typography>
                    <div id="navbar">
                        <Link to="/" >
                            <Button sx={{ color: "white" }}> Home </Button>
                        </Link>
                        <Link to="/Register" >
                            <Button sx={{ color: "white" }}>  Sign Up </Button>
                        </Link>
                        <Link to="/Login">
                            <Button sx={{ color: "white" }}> Login </Button>
                        </Link>
                    </div>
                </Stack>
            </AppBar>
        </>
    )
}

export default Navbar;