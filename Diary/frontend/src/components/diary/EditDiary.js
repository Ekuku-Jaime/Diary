import React, { Component } from "react";
import { connect } from "react-redux";
import { getDiary, editDiary } from "../../actions/diary";
import DiaryForm from "./DiaryForm";
import _ from "lodash";
import { Redirect } from "react-router";

class EditDiary extends Component {
  componentDidMount() {
    this.props.getDiary(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editDiary(this.props.match.params.id, formValues);

    <Redirect to="/" />;
  };
  render() {
    return (
      <div className="container">
        <h2 style={{ marginTop: "2rem" }}>Edit Todo</h2>
        <DiaryForm
          initialValues={_.pick(this.props.diary, "title", "body")}
          enableReinitialize={true}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  diary: state.diaries[ownProps.match.params.id],
});

export default connect(mapStateToProps, { getDiary, editDiary })(EditDiary);
