import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };
  componentDidMount() {
    this.props.alert.show("hi lesley");
  }
  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.message.message.title) {
        alert.error(`Title ${error.message.message.title.join()}`);
      }
      if (error.message.message.body) {
        alert.error(`Body ${error.message.message.body.join()}`);
      }
    }
    if (message !== prevProps.message) {
      if (message.diaryDeleted) alert.success(message.diaryDeleted);
      if (message.diaryAdded) alert.success(message.diaryAdded);
      if (message.diaryEdited) alert.success(message.diaryEdited);
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});
export default connect(mapStateToProps)(withAlert()(Alerts));
