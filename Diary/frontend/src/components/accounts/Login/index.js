import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { login } from "../../../actions/auth";
import PropTypes from "prop-types";

class LoginForm extends Component {
    static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };
  renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div className={`field ${touched && error ? "error" : ""}`}>
        <label className="control-label">{label}</label>
        <input {...input} type={type} className="form-control" />
        {touched && error && <span className="text-danger">{error} </span>}
        <br />
      </div>
    );
  };

  hiddenField = ({ type, meta: { error } }) => {
    return (
      <div className="text " >
        <input type={type} />
        {error && <div className="text-danger">{error}</div>}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.login(formValues);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="col-md-6 md-auto mx-auto">
        <div className="card card-body mt-5">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              name="username"
              type="text"
              component={this.renderField}
              label="Username"
              validate={[required, minLength3, maxLength15]}
              className="form-control"
            />

            <Field
              name="password"
              type="password"
              component={this.renderField}
              label="Password"
              validate={required}
            />

            <Field
              name="non_field_errors"
              type="hidden"
              component={this.hiddenField}
            />
            <button className="btn-sm btn-primary">Login</button>
          </form>
          <p style={{ marginTop: "1rem" }}>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    );
  }
}
const required = (value) => (value ? undefined : "Required");

const minLength = (min) => (value) =>
  value && value.length < min
    ? `Must be at least ${min} characters`
    : undefined;

const minLength3 = minLength(3);

const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const maxLength15 = maxLength(15);

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

LoginForm = connect(mapStateToProps, { login })(LoginForm);

export default reduxForm({
  form: "loginForm",
})(LoginForm);
