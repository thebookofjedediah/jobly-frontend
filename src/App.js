import React, { useState, useEffect } from "react";
import Nav from './components/Nav'
import Routes from './Routes';
import JoblyApi from "./JoblyApi";
import { decode } from "jsonwebtoken";
import UserContext from "./context/UserContext";
import useLocalStorage from './hooks/useLocalStorage';

import './App.css';

export const LOCAL_TOKEN = "jobly-token";


function App() {
  const [token, setToken] = useLocalStorage(LOCAL_TOKEN);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    async function getCurrentUser() {
      try {
        JoblyApi.token = token;
        let { username } = decode(token);
        let currentUser = await JoblyApi.getCurrentUser(username);
        setCurrentUser(currentUser);
      } catch (e) {
        setCurrentUser(null)
      }
    }
    getCurrentUser();
    console.log(token)
    console.log(currentUser)
  }, [token])

  const handleLogOut = () => {
    setCurrentUser(null);
    setToken(null);
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <h1>current user: {}</h1>
        <Nav handleLogOut={handleLogOut} />
        <Routes setToken={setToken} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
