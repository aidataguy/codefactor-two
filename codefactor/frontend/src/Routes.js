import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Login from './components/Login';


export default function Routes(){
    return (
    <Router>
      <div>
        <Switch>
           <Route path="/Login" component = {Login} />
           <Redirect from='/Login/' to="/" />          
        </Switch>
      </div>
    </Router>
    )
}
