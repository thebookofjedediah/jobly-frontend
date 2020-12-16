import React from 'react';
import Home from './components/Home'
import Companies from './components/Companies'
import Company from './components/Company'
import Jobs from './components/Jobs'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import PrivateRoute from './components/PrivateRoute'

import { Switch, Route } from "react-router-dom";

const Routes = ({ setToken }) => {
    return (
        <Switch>
            <PrivateRoute exact path="/companies">
                <Companies />
            </PrivateRoute>
            <PrivateRoute exact path="/companies/:handle">
                <Company />
            </PrivateRoute>
            <PrivateRoute exact path="/jobs">
                <Jobs />
            </PrivateRoute>
            <Route exact path="/login">
                <Login setToken={setToken} />
            </Route>
            <Route exact path="/signup">
                <Signup setToken={setToken} />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes;