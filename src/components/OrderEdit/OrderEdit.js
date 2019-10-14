import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleOrderEdit } from "../../actions/common";
import { orderCreate, getOrdersList } from "../../actions/orders";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";

import "./OrderEdit.scss";

class OrderCreate extends Component {
  state = {
    name: "",
    description: "",
    loading: false
  };

  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleOrderSave = async () => {
    const { name, description } = this.state;
    this.setState({ loading: true });
    this.props
      .orderCreate({ name, description })
      .then(res => {
        this.props.toggleOrderEdit();
        this.setState({ loading: false, name: "", description: "" });
        this.props.getOrdersList();
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  };
  render() {
    const { loading } = this.state;
    const { visible, toggleOrderEdit, order } = this.props;
    return order ? (
      <div className={`order-edit-panel ${visible ? "visible" : ""}`}>
        <div className="panel-header">
          <span className="header-title">
            <span>№{order.id}</span>
            <div>{order.name}</div>
          </span>
          <button onClick={() => toggleOrderEdit()} className="header-close">
            X
          </button>
        </div>
        <div className="panel-content">
          <LoadingOverlay center loading={loading}>
            <div className="order-create-form">
              <div className="form-input-wrapper">
                <span>Описание</span>
                <p>{order.description}</p>
              </div>
              <button
                onClick={this.handleOrderSave}
                className="common-btn form-btn"
              >
                Сохранить
              </button>
            </div>
          </LoadingOverlay>
        </div>
      </div>
    ) : null;
  }
}

function mapStateToProps(state) {
  return { visible: state.common.orderEditVisible };
}

export default connect(
  mapStateToProps,
  { toggleOrderEdit, orderCreate, getOrdersList }
)(OrderCreate);
