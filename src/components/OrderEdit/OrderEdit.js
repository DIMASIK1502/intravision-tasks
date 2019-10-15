import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleOrderEdit } from "../../actions/common";
import { orderCreate, getOrdersList, orderUpdate } from "../../actions/orders";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import StatusPicker from "../StatusPicker/StatusPicker";
import "./OrderEdit.scss";

class OrderEdit extends Component {
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
    const { visible, toggleOrderEdit, order, orderUpdate } = this.props;
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
        <LoadingOverlay center loading={loading}>
          <div className="panel-content">
            <div className="order-edit-form">
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
            <div className="content-sidebar">
              <div className="sidebar-info">
                <div className="info-list">
                  <div className="list-item">
                    <div className="item-content">
                      <div className="status">
                        <StatusPicker
                          onStatusChange={id => orderUpdate(order.id, id)}
                          statusId={order.statusId}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="list-item">
                    <span className="item-label">Заявитель</span>
                    <div className="item-content">{order.initiatorName}</div>
                  </div>
                  <div className="list-item">
                    <span className="item-label">Создана</span>
                    <div className="item-content"></div>
                  </div>
                  <div className="list-item">
                    <span className="item-label">Исполнитель</span>
                    <div className="item-content">{order.executorName}</div>
                  </div>
                  {order.resolutionDatePlan && (
                    <div className="list-item">
                      <span className="item-label">Срок</span>
                      <div className="item-content">
                        {new Date(
                          order.resolutionDatePlan
                        ).toLocaleDateString()}
                      </div>
                    </div>
                  )}
                  <div className="list-item">
                    <span className="item-label">Приоритет</span>
                    <div className="item-content">{order.priorityName}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LoadingOverlay>
      </div>
    ) : null;
  }
}

function mapStateToProps(state) {
  return { visible: state.common.orderEditVisible };
}

export default connect(
  mapStateToProps,
  { toggleOrderEdit, orderCreate, getOrdersList, orderUpdate }
)(OrderEdit);
