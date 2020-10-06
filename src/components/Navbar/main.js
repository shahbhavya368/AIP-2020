import React from 'react';
import { Switch, Route } from "react-router-dom";
import LandingPage from './landingPage';

function Main() {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            {/* <Route path="/addEvent" component={AddEvent} /> */}
        </Switch>
    )
}

export default Main
