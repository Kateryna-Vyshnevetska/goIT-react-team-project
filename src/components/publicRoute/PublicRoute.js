import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({
    component: Component,
    isAuthenticated,
    restricted,
    ...routeProps
}) => (
        <Route
            {...routeProps}
            render={props =>
                isAuthenticated && restricted ? (
                    <Redirect to="/checkListPage" />
                ) : (
                        <Component {...props} />
                    )
            }
        />
    );
const mapStateToProps = state => ({
    isAuthenticated: true,
});

export default connect(mapStateToProps)(PublicRoute);
