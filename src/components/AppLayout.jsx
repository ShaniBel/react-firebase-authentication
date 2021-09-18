import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";

function AppLayout(props) {
  const { loggedIn, currentUser } = props.auth;

  const getOut = (e) => {
    logout();
  };

  return (
    loggedIn && (
      <div>
        <h1>Secret!!! Shuuu!</h1>
        Wellcome {currentUser.email}
        <button onClick={getOut}>Logout</button>
      </div>
    )
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { logout })(AppLayout);
