import React, { Component } from "react";
import "./LoadingOverlay.scss";

export default class LoadingOverlay extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <div
          className={`loading-overlay ${this.props.loading ? "active" : ""}`}
          style={{ aligItems: this.props.center ? "center" : "flex-start" }}
        >
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
