import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { userLogout } from "./actions/cartActions";
class Logout extends Component {
  constructor(props) {
    super(props);

    // reset login status
    //this.props.logout();

    this.state = {
      username: "",
      password: "",
      submitted: false,
      loginError: false,
      loggedIn: false,
    };
  }

  handleLogout = () => {
    this.props.userLogout();
    window.location.reload();
  };
  render() {
    let isLoggedIn = this.props.loggedIn;
    if (isLoggedIn === false) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="container">
          <div className="cart">
            <div className="ex1">
              <form name="form" onSubmit={this.handleLogin}>
                <h5>Confirm Logout?</h5>
                <div className={"form-group"}>
                  <button
                    className="waves-effect waves-light btn pink remove"
                    onClick={() => {
                      this.handleLogout();
                    }}
                  >
                    Logout
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    ...state,
    loggedIn: state.loggedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => {
      dispatch(userLogout());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
