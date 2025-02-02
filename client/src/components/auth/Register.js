import React, { Component } from "react";
import './register.css';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container" id="register">
        <div className="row">
        <div className="registerBox">
          <div>
            <h4><b>Register below </b></h4>
          </div>
          <div>
            <label htmlFor="name">Name</label>
          </div>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field">
                  <span className="redtext">{errors.name}</span>
                    <input
                      onChange={this.onChange}
                      value={this.state.name}
                      error={errors.name}
                      id="name"
                      type="text"
                      className={classnames("", {
                      invalid: errors.name
                      })}
                    />
                </div>
                <div> 
                  <label htmlFor="email">Email</label>
                </div>
                  <div className="input-field">
                    <span className="redtext">{errors.email}</span>
                    <br/>
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      className={classnames("", {
                        invalid: errors.email
                      })}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="input-field">
                    <span className="redtext">{errors.password}</span>
                    <input
                      onChange={this.onChange}
                      value={this.state.password}
                      error={errors.password}
                      id="password"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password
                      })}
                    />
                  </div>
                  <div>
                  <label htmlFor="password2">Confirm Password</label>
                  </div>
                  <div className="input-field">
                    <span className="redtext">{errors.password2}</span>
                    <input
                      onChange={this.onChange}
                      value={this.state.password2}
                      error={errors.password2}
                      id="password2"
                      type="password"
                      className={classnames("", {
                        invalid: errors.password2
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
                      Sign up
                    </button>
                  </div>
                </form>
            <div>
            <p>
                Already have an account? <Link to="/signin">Log in</Link>
            </p>
          </div>
          </div>
          </div>
        </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
