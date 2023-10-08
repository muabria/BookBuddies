/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link, Routes, Route } from "react-router-dom";
import RegisterForm from "./Register";
import LoginForm from "./Login";
import SingleBook from "./SingleBook";


const Navbar = () => {
    return (
        <> 
        <div id="navbar">
            <button id="Home"> Home </button>
            <Link to="/Register" >
                <button>  Sign Up </button>
            </Link>
            <Link to="/Login">
                <button> Login </button>
            </Link>
            <Link to="/SingleBook"> 
                <button> Single Book </button>            
            </Link>
        </div>

        <Routes>
            <Route path="/Register" element={<RegisterForm />} />
            <Route path="/Login" element={<LoginForm />} />
            <Route path="/SingleBook" element={<SingleBook />} />
        </Routes>
        </>
    )
}

export default Navbar;