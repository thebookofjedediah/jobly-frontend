import React from 'react';
import Home from './Components/Home'
import Companies from './Components/Companies'
import Company from './Components/Company'
import Jobs from './Components/Jobs'
import Login from './Components/Login'
import Profile from './Components/Profile'

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