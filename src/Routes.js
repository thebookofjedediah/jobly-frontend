import React from 'react';
import Home from './components/Home'
import Companies from './components/Companies'
import Company from './components/Company'
import Jobs from './components/Jobs'
import Login from './components/Login'
import Profile from './components/Profile'

import { Switch, Route } from "react-router-dom";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/companies">
                <Companies />
            </Route>
            <Route exact path="/companies/apple">
                <Company />
            </Route>
            <Route exact path="/jobs">
                <Jobs />
            </Route>
            <Route exact path="/login">
                <Login />
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