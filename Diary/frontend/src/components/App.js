import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import {HashRouter as Router, Route, Switch } from "react-router-dom"; 
import history from "../components/commom/history";

import GlobalStyles from "../styles/GlobalStyles";
import Home from "./diary/Home";

import LoginForm from "./accounts/Login/index";
import RegisterForm from "./accounts/SignupForm/index";
import NavB from "../components/diary/Nav";

import PrivateRoute from "./commom/PrivateRoute";
import Alerts from "./commom/Alerts";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";
import EditDiary from "./diary/EditDiary";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router history={history}>
            <Fragment>
              <GlobalStyles />
              <Alerts />
              <Switch>
                <div className="container ">
                  <NavB />
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/register" component={RegisterForm} />
                  <Route exact path="/login" component={LoginForm} />
                  <Route exact path="/edit/:id" component={EditDiary} />
                </div>
              </Switch>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;

render(<App />, document.getElementById("app"));
