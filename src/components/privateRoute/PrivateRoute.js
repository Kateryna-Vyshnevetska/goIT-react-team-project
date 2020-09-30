import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const PrivateRoute = ({
    component: Component,
    isAuthenticated,
    ...routeProps
}) => (
        <Route
            {...routeProps}
            render={props =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/logIn" />
            }
        />
    );
const mapStateToProps = state => ({
    isAuthenticated: true,
});
export default connect(mapStateToProps)(PrivateRoute);
