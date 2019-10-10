import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import OrderCreate from "../components/OrderCreate/OrderCreate";
import Home from "../pages/Home/Home";

export default class Root extends Component {
  render() {
    return (
      <Switch>
        <Route path="/orders">
          <Switch>
            <Route exact path={"/orders/create"}>
              <OrderCreate />
            </Route>
          </Switch>
          <Home />
        </Route>
        <Route path="*">
          <div
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <span
              style={{
                color: "#d1e0ed",
                fontSize: 36,
                textAlign: "center",
                display: "block",
                fontFamily: "Roboto"
              }}
            >
              Страница не найдена
            </span>
          </div>
        </Route>
      </Switch>
    );
  }
}
