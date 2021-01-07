import React, { Fragment } from "react";
import CreateDiary from "./CreateDiary";
import DiaryList from "./DiaryList";

export default function Home() {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-6 ">
          <CreateDiary />
        </div>
        <div className="col-md-6">
          <DiaryList />
        </div>
      </div>
    </Fragment>
  );
}
