import React, { Component } from "react";
import { connect } from "react-redux";
import { addDiary } from "../../actions/diary";
import TodoForm from "./DiaryForm";
import PropTypes from "prop-types";

class CreateDiary extends Component {
  static propTypes = {
    addDiary: PropTypes.func.isRequired,
  };
  onSubmit = (values) => {
    this.props.addDiary(values);
    
  };
  
  render() {
    return (
      <div className="md-auto mx-auto">
        <TodoForm destroyOnUnmount={true} onSubmit={this.onSubmit} />;
      </div>
    );
  }
}

export default connect(null, { addDiary })(CreateDiary);
