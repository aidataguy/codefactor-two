import React from 'react';
import './App.css';
import Page from './components/Page';
import Login from './components/Login';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter> 

        <div className="vh-100">
          <Switch>
            <Route
              exact
              path="/"
              component={Page}
            />
            <Route
              exact
              path="/Login"
              component={Login}

            />
          </Switch>
        </div>

    </BrowserRouter>
  );
}


export default App;
