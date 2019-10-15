import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleOrderCreate } from "../../actions/common";
import { orderCreate, getOrdersList } from "../../actions/orders";
import "./OrderCreate.scss";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";

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
        this.props.toggleOrderCreate();
        this.setState({ loading: false, name: "", description: "" });
        this.props.getOrdersList();
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  };
  render() {
    const { name, description, loading } = this.state;
    const { visible, toggleOrderCreate } = this.props;
    return (
      <div className={`order-create-panel ${visible ? "visible" : ""}`}>
        <div className="panel-header">
          <span className="header-title">Новая заявка</span>
          <button onClick={() => toggleOrderCreate()} className="header-close">
            X
          </button>
        </div>
        <div className="panel-content">
          <LoadingOverlay center loading={loading}>
            <div className="order-create-form">
              <div className="form-input-wrapper">
                <span>Название</span>
                <textarea
                  onChange={this.handleTextChange}
                  name="name"
                  value={name}
                  className="input-order-name"
                ></textarea>
              </div>
              <div className="form-input-wrapper">
                <span>Описание</span>
                <textarea
                  onChange={this.handleTextChange}
                  name="description"
                  value={description}
                  className="input-order-description"
                ></textarea>
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
    );
  }
}

function mapStateToProps(state) {
  return {
    visible: state.common.orderCreateVisible,
    statusList: state.orders.statusList
  };
}

export default connect(
  mapStateToProps,
  { toggleOrderCreate, orderCreate, getOrdersList }
)(OrderCreate);
