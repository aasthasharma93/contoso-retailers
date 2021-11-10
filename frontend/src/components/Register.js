import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userRegister } from "./actions/cartActions";
import { Redirect } from "react-router";
class Register extends Component {
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
  componentDidMount() {
    this.setState({
      loggedIn: this.props.loggedIn,
      loginError: this.props.loginError,
    });
  }
  handleChange = (name) => (e) => {
    if (name === "username") {
      this.setState({ username: e.target.value });
    } else if (name === "password") {
      this.setState({ password: e.target.value });
    }
  };
  handleRegister = () => {
    const { username, password } = this.state;
    if (username && password) this.props.userRegister(username, password);
  };
  render() {
    if (this.state.loggedIn === true) {
      return <Redirect to="/" />;
    } else {
      const { username, password } = this.state;
      let showError = this.state.loginError === true ? true : false;
      return (
        <div className="container">
          <div className="cart">
            <div className="ex1">
              <h5>Register:</h5>
              <form name="form" onSubmit={this.handleRegister}>
                <div className={"form-group"}>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    name="username"
                    onChange={this.handleChange("username")}
                    id="username"
                  />
                </div>
                <div className={"form-group"}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    name="password"
                    onChange={this.handleChange("password")}
                    id="password"
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary">Register</button>
                  &nbsp;
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
    loginError: state.loginError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userRegister: (username, password) => {
      dispatch(userRegister(username, password));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
