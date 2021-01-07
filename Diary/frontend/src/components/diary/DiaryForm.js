import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class DiaryForm extends Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div className={`field ${touched && error ? "error" : ""}`}>
        <label className="control-label">{label}</label>
        <input {...input} type={type} className="form-control" placeholder="Write the title" />
        {touched && error && <span className="text-danger">{error} </span>}
        <br />
      </div>
    );
  };
  renderFieldArea = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div className={`field ${touched && error ? "error" : ""}`}>
        <label className="control-label">{label}</label>
        <textarea {...input} type={type} className="form-control" placeholder="Write your diary here" rows="10" cols="20"/>
        {touched && error && <span className="text-danger">{error} </span>}
        <br />
      </div>
    );
  };

  hiddenField = ({ type, meta: { error } }) => {
    return (
      <div className="text">
        <input type={type} />
        {error && <div className="text-danger">{error}</div>}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    const btnText = `${this.props.initialValues ? "Update" : "Add"}`;
    return (
      <div className="card card-body mt-5">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="title"
            type="text"
            component={this.renderField}
            label="Title"
            validate={[required, minLength5]}
            className="form-control"
          />

          <Field
            name="body"
            type="textarea"
            component={this.renderFieldArea}
            label="Body"
            validate={[required, minLengthBody]}
          />

          <button className="btn-sm btn-primary">{btnText}</button>
        </form>
      </div>
    );
  }
}
const required = (value) => (value ? undefined : "Write something");

const minLength = (min) => (value) =>
  value && value.length < min
    ? `Title be at least ${min} characters`
    : undefined;

const minLength5 = minLength(5);

const minLengthBody = (value) =>
  value && value.length < 5
    ? "I think your story isn't that too short!"
    : undefined;

export default reduxForm({
  form: "diaryForm",
  touchOnBlur: false,
})(DiaryForm);

