import React, { Component } from "react";
import './LoginRegister.css';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="login" className="container">
        <div  className="row">
        <div className="column" id="leftColumn"></div>
        <div className="column" id="rightColumn">
          <div>
              <h4>
                <b>Login below </b>
              </h4>
            <div>
            <label htmlFor="email">Email</label>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field">
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />

              </div>
              <div><label htmlFor="password">Password</label></div>
              <div className="input-field">
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />

              </div>
              <div>
                <button
                  style={{
                    background:"black",
                    color:"white",
                    fontSize:"1rem",    
                    width: "120px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
                </div>
                <div>
                <p className="grey-text text-darken-1"
                style={{
                  marginTop: "1rem"
                }}
                >
                Want to <Link to="/sign-up">Register?</Link>
              </p>

              </div>
            </form>
            
          </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
