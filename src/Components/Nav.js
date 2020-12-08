import React from 'react';
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className="Nav">
            <Link to="/">Home</Link>
            <Link to="/companies">Companies</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
        </div>
    )
}

export default Nav;