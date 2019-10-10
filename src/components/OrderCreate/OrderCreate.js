import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./OrderCreate.scss";

export default class OrderCreate extends Component {
  render() {
    return (
      <div className="order-create-panel">
        <div className="panel-header">
          <span className="header-title">Новая заявка</span>
          <Link to="/orders" className="header-close">
            X
          </Link>
        </div>
      </div>
    );
  }
}
