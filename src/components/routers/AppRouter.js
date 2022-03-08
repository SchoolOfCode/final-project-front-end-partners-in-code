import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

 


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth"
                        component={ useAuth0 }
                    />

                    <Route 
                        exact
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
