import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from '../context/UserContext';


const Nav = ({handleLogOut}) => {

    const { currentUser } = useContext(UserContext);

    return (
        <>
        {!currentUser ? (<div className="Nav">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </div>)
        :
        (<div className="Nav">
            <Link to="/companies">Companies</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/" onClick={handleLogOut}>Logout</Link>
        </div>)
        }
        </>
    )
}

export default Nav;