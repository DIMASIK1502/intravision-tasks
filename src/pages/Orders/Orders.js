import React, { Component } from "react";
import { connect } from "react-redux";
import OrderCreate from "../../components/OrderCreate/OrderCreate";
import { toggleOrderCreate } from "../../actions/common";
import Table from "../../components/Table/Table";

import {
  getOrdersList,
  getStatusList,
  getPrioritiesList
} from "../../actions/orders";
import "./Orders.scss";

class Orders extends Component {
  async componentDidMount() {
    await this.props.getOrdersList();
    await this.props.getStatusList();
    await this.props.getPrioritiesList();
  }
  render() {
    const { toggleOrderCreate, orderCreateVisible, orders } = this.props;
    return (
      <>
        <Table
          columns={[
            { title: "ID", width: "112px", key: "id" },
            {
              title: "Название",
              width: "420px",
              key: "name",
              className: "cell-name"
            },
            {
              title: "Статус",
              width: "120px",
              render: row => (
                <div
                  className="status-badge"
                  style={{ backgroundColor: row.statusRgb }}
                >
                  {row.statusName}
                </div>
              )
            },
            { title: "Исполнитель", width: "1fr" }
          ]}
          data={orders}
        ></Table>
        <OrderCreate />
        <div className="orders-page">
          <button
            style={{
              transform: `translateX(${orderCreateVisible ? -975 : 0}px)`
            }}
            className="order-create-btn"
            onClick={() => toggleOrderCreate()}
          >
            Создать заявку
          </button>
          <div className="table-wrapper">
            <table>
              <thead className="table-header">
                <tr>
                  <th style={{ textAlign: "center", width: 112 }}>ID</th>
                  <th style={{ textAlign: "left", width: 420 }}>Название</th>
                  <th style={{ textAlign: "left", width: 120 }}>Статус</th>
                  <th style={{ textAlign: "left" }}>Исполнитель</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {orders.map((item, key) => {
                  return (
                    <tr key={`table-row-${key}`}>
                      <td>
                        <div>
                          <div className="cell-border"></div>
                          {item.id}
                        </div>
                      </td>
                      <td>
                        <div className="cell-text">
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td>
                        <div className="cell-status">
                          <div
                            className="status-badge"
                            style={{ backgroundColor: item.statusRgb }}
                          >
                            {item.statusName}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>{item.executorName}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {orders.map((item, key) => {
                  return (
                    <tr key={`table-row-${key}`}>
                      <td>
                        <div>
                          <div className="cell-border"></div>
                          {item.id}
                        </div>
                      </td>
                      <td>
                        <div className="cell-text">
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td>
                        <div className="cell-status">
                          <div
                            className="status-badge"
                            style={{ backgroundColor: item.statusRgb }}
                          >
                            {item.statusName}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>{item.executorName}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {orders.map((item, key) => {
                  return (
                    <tr key={`table-row-${key}`}>
                      <td>
                        <div>
                          <div className="cell-border"></div>
                          {item.id}
                        </div>
                      </td>
                      <td>
                        <div className="cell-text">
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td>
                        <div className="cell-status">
                          <div
                            className="status-badge"
                            style={{ backgroundColor: item.statusRgb }}
                          >
                            {item.statusName}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>{item.executorName}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {orders.map((item, key) => {
                  return (
                    <tr key={`table-row-${key}`}>
                      <td>
                        <div>
                          <div className="cell-border"></div>
                          {item.id}
                        </div>
                      </td>
                      <td>
                        <div className="cell-text">
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td>
                        <div className="cell-status">
                          <div
                            className="status-badge"
                            style={{ backgroundColor: item.statusRgb }}
                          >
                            {item.statusName}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>{item.executorName}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {orders.map((item, key) => {
                  return (
                    <tr key={`table-row-${key}`}>
                      <td>
                        <div>
                          <div className="cell-border"></div>
                          {item.id}
                        </div>
                      </td>
                      <td>
                        <div className="cell-text">
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td>
                        <div className="cell-status">
                          <div
                            className="status-badge"
                            style={{ backgroundColor: item.statusRgb }}
                          >
                            {item.statusName}
                          </div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>{item.executorName}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    orderCreateVisible: state.common.orderCreateVisible,
    orders: state.orders.orders,
    statusList: state.orders.statusList,
    prioritiesList: state.orders.prioritiesList
  };
}
export default connect(
  mapStateToProps,
  { getOrdersList, getStatusList, getPrioritiesList, toggleOrderCreate }
)(Orders);
