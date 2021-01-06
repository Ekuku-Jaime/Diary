import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addDiary, getDiaries } from "../../actions/diary";

class Form extends Component {
  state = {
    title: "",
    body: "",
  };
 
    
  
  static propTypes = {
    addDiary: PropTypes.func.isRequired,
    getDiaries: PropTypes.func.isRequired,
  };
  componentDidUpdate() {
    this.props.getDiaries();
  }
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body } = this.state;
    const diary = { title, body };
    this.props.addDiary(diary);

    this.setState({
      title: "",
      body: "",
    });
  };
  render() {
    const { title, body } = this.state;
    return (
      <div className="col-md-6 md-auto">
        <div className="card card-body mt-5 shadow">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                name="title"
                onChange={this.handleChange}
                value={title}
              />
              <div className="valid-feedback"></div>
            </div>

            <div className="form-group">
              <label>Diary</label>
              <textarea
                className="form-control "
                placeholder="Add your dictionary"
                name="body"
                onChange={this.handleChange}
                value={body}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addDiary, getDiaries })(Form);
