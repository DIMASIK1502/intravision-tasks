import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleOrderCreate } from "../../actions/common";
import "./OrderCreate.scss";

class OrderCreate extends Component {
  render() {
    const { visible, toggleOrderCreate } = this.props;
    return (
      <div className={`order-create-panel ${visible ? "visible" : ""}`}>
        <div className="panel-header">
          <span className="header-title">Новая заявка</span>
          <button onClick={() => toggleOrderCreate()} className="header-close">
            X
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { visible: state.common.orderCreateVisible };
}

export default connect(
  mapStateToProps,
  { toggleOrderCreate }
)(OrderCreate);
