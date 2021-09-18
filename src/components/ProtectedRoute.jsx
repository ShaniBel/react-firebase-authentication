import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, render, loggedIn, ...rest }) => {

  return (
    <Route
    {...rest}
    render={(props) => {
      if (loggedIn) {
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
  const { loggedIn } = state.auth;
  return {
    loggedIn
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
