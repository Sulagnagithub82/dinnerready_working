import React, { Component } from "react";
import './Dashboard.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import { black } from "color-name";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div  className="container">
        <div className="row">
          <div>
          <div className="message">
            <h4>
              <b>Hey </b> {user.name.split(" ")[0]},
              <p>
                You are successfully logged into your Dinner Ready Profile!!{" "}
              </p>
            </h4>
            
            <button
              style={{
                background:"black",
                color:"white",
                fontSize:"1.5rem",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
