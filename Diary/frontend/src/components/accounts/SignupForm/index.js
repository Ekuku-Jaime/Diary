import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../../actions/auth";
import { createMessage } from "../../../actions/messages";
import { Formik } from "formik";
import * as Yup from "yup";
import NavB from "../../diary/Nav"

class SignupForm extends Component {
  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
    
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
              
              }}
              validationSchema={Yup.object({
                username: Yup.string()
                  .min(4, "Must be 4 characters or more")
                  .max(15, "Must be 15 characters or less")
                  .required("Username is required"),

                password: Yup.string()
                  .min(6, "Must be 6 characters or more")
                  .required("password is required"),
                  password2: Yup.string()
                  .oneOf([Yup.ref('password'), null], "Passwords don't match")
                  .required('Password confirm is required'),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  this.props.register(values);
                  setSubmitting(false);
                }, 400);
              }}
            >
              {(formik) => (
                <div
                  
                  style={{ marginTop: "20px" }}
                >
                  
                  <h3 className="text-center ">Signup Form</h3>
                  <div className="col-md-6 col-lg-6   md-auto mx-auto">
                  <div className="card card-body mt-5 shadow ">
                    <form onSubmit={formik.handleSubmit}>
                      <label htmlFor="username">Username</label>
                      <input
                        className="form-control"
                        id="username"
                        type="text"
                        {...formik.getFieldProps("username")}
                      />
                      {formik.touched.username && formik.errors.username ? (
                        <span span className="text-danger">
                          {formik.errors.username}
                        </span>
                      ) : null}{" "}
                      <br />
                      <label htmlFor="email">Email</label>
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        {...formik.getFieldProps("email")}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <span span className="text-danger">
                          {formik.errors.email}
                        </span>
                      ) : null}{" "}
                      <br />
                      <label htmlFor="password">Password</label>
                      <input
                        className="form-control"
                        id="password"
                        type="password"
                        {...formik.getFieldProps("password")}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <span className="text-danger">
                          {formik.errors.password}
                        </span>
                      ) : null}{" "}
                      <br />
                      <label htmlFor="password2">Confirm Password</label>
                      <input
                        className="form-control"
                        id="password2"
                        type="password"
                        {...formik.getFieldProps("password2")}
                      />
                      {formik.touched.password2 && formik.errors.password2 ? (
                        <span className="text-danger">
                          {formik.errors.password2}
                        </span>
                      ) : null}{" "}
                      <br />
                      <button className="btn btn-primary mt-2" type="submit">
                        Submit
                      </button>
                    </form>
                    <p style={{ marginTop: "1rem" }}>
                      Already have an account? <Link to="/login">Login</Link>
                    </p>
                  </div>
                </div>
                </div>
              )}
            </Formik>
        
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { register, createMessage })(
  SignupForm
);
