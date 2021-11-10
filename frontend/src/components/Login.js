import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLogin } from "./actions/cartActions";
import { Redirect } from "react-router";
class Login extends Component {
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
  handleLogin = () => {
    const { username, password } = this.state;
    this.props.userLogin(username, password);
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
              <h5>Please Log In:</h5>
              <form name="form" onSubmit={this.handleLogin}>
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

                  <div className="help-block">Password is required</div>
                  <div style={{ display: showError ? "inline-block" : "none" }}>
                    {" "}
                    <p>Login Error, please try again!</p>
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary">Login</button>
                  &nbsp;
                  <Link to="/register" className="btn btn-link">
                    Register
                  </Link>
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
    userLogin: (username, password) => {
      dispatch(userLogin(username, password));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
