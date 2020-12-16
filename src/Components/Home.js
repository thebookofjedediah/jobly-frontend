import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Home = () => {

    const { currentUser } = useContext(UserContext);

    return (
        <>
        {!currentUser ? 
        (<h1>Logged Out</h1> )
        :
        (<h1>Logged In</h1> )
        }
        </>
    )
}

export default Home;