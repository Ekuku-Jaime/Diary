import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDiaries, deleteDiary } from "../../actions/diary";
import { Link } from "react-router-dom";
import { Trash, Pen } from "react-bootstrap-icons";

class DiaryList extends Component {
  static propTypes = {
    diaries: PropTypes.array.isRequired,
    getDiaries: PropTypes.func.isRequired,
    deleteDiary: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getDiaries();
  }
  componentDidUpdate() {
    this.props.getDiaries();
  }
  render() {
    return (
      <div className=" md-auto">
        <div className="card card-body mt-5 shadow">
          <div className="card-title">
            <h3>Your Diaries</h3>
            <hr />
          </div>
          <div className=" ">
            <ul>
              {this.props.diaries.map((diary) => (
                <li
                  key={diary.id}
                  className="list-group-item d-flex flex-column "
                >
                  <span>
                    {diary.title}
                    <button
                      onClick={this.props.deleteDiary.bind(this, diary.id)}
                      className="btn  btn-sm float-right ml-2"
                    >
                      <Trash />
                    </button>{" "}
                    <button className="btn  btn-sm float-right">
                      <Link to={`/edit/${diary.id}`}>
                        <Pen />
                      </Link>
                    </button>
                  </span>
                  {diary.body}
                </li>
              ))}

              <hr />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  diaries: state.diaries.diaries,
});
export default connect(mapStateToProps, { getDiaries, deleteDiary })(DiaryList);
