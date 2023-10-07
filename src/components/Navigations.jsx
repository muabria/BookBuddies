/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link, Routes, Route } from "react-router-dom";
import RegisterForm from "./Register";

const Navbar = () => {
    return (
        <> 
        <div id="navbar">
            
            <Link to={RegisterForm} >
                <button>  Register Form </button>
            </Link>
            <Link to="/Login">
                <button> Login Form </button>
            </Link>
        </div>
        </>
    )
}

export default Navbar;