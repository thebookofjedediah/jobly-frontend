import React, { useState, useEffect } from "react";
import NavBar from './components/NavBar'
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
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = decode(token);
          // put the token on the Api class so it can use it to call the API.
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }

    // set infoLoaded to false while async getCurrentUser runs; once the
    // data is fetched (or even if an error happens!), this will be set back
    // to false to control the spinner.
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  const handleLogOut = () => {
    setCurrentUser(null);
    setToken(null);
  };

  if (!infoLoaded) return  <div>Loading....</div>;

  return (
    <div className="App">
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <NavBar handleLogOut={handleLogOut} />
        <Routes setToken={setToken} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
