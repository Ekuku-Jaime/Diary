import React, { Fragment } from "react";

import Form from "./Form";
import CreateDiary from "./CreateDiary";
import DiaryForm from './DiaryForm'
import Diaries from "./Diaries";
import Header from "./Header";
import NavB from "./Nav";
import Login from "../accounts/Login";
export default function Home() {
  return (
    <Fragment>
      {/* <Header/> */}

      <div className="row">
        <div className="col-md-6 "><CreateDiary/></div>
        <div className="col-md-6"><Diaries /></div>
        
      </div>
    </Fragment>
  );
}
