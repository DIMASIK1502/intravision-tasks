import React, { Component } from "react";
import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <input className="search-input"></input>
      </div>
    );
  }
}
