import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, render, loggedIn , currentUser, ...rest }) => {

  return (
    <Route
    {...rest}
    render={(props) => {
      if (loggedIn && currentUser) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

const mapStateToProps = (state) => {
  const { loggedIn, currentUser } = state.auth;
  return {
    loggedIn,
    currentUser
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
