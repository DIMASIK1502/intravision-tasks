import React, { Component } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import "./Layout.scss";

export default class Layout extends Component {
  render() {
    return (
      <div className="main-layout">
        <Sidebar />
        <div className="page-content">
          <div className="content-header">
            <Header />
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
