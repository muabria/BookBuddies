/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link, Routes, Route } from "react-router-dom";



const Navbar = () => {
    return (
        <> 
    
        <div id="navbar">
        
            <Link to="/Login">
                <button> Login </button>
            </Link>
            <Link to="/Register" >
                <button>  Sign Up </button>

            </Link>
            
        </div>
        </>
    )
}
export default Navbar;