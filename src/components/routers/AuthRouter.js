import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Homepage from '../Homepage/Homepage';


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
                        component={ Homepage }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
