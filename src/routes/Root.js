import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Orders from "../pages/Orders/Orders";

export default class Root extends Component {
  render() {
    return (
      <Switch>
        <Route path="/orders">
          <Orders />
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
