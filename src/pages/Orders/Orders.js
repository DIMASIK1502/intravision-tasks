import React, { Component } from "react";
import { connect } from "react-redux";
import OrderCreate from "../../components/OrderCreate/OrderCreate";
import { toggleOrderCreate, toggleOrderEdit } from "../../actions/common";
import Table from "../../components/Table/Table";

import {
  getOrdersList,
  getStatusList,
  getPrioritiesList,
  getOrderDetails
} from "../../actions/orders";
import "./Orders.scss";
import OrderEdit from "../../components/OrderEdit/OrderEdit";

class Orders extends Component {
  state = {
    orderDetails: null
  };
  async componentDidMount() {
    await this.props.getOrdersList();
    await this.props.getStatusList();
    await this.props.getPrioritiesList();
  }
  handleRowClick = async row => {
    this.setState({ orderDetails: row });
    this.props.toggleOrderEdit(true);
  };
  render() {
    const { orderDetails } = this.state;
    const {
      toggleOrderCreate,
      orderCreateVisible,
      orders,
      ordersTableLoading
    } = this.props;
    return (
      <>
        <OrderCreate />
        <OrderEdit order={orderDetails} />
        <div className="orders-page">
          <button
            style={{
              transform: `translateX(${orderCreateVisible ? -975 : 0}px)`
            }}
            className="common-btn order-create-btn"
            onClick={() => toggleOrderCreate()}
          >
            Создать заявку
          </button>

          <div className="table-wrapper">
            <Table
              onRowClick={this.handleRowClick}
              loading={ordersTableLoading}
              columns={[
                {
                  headerClassName: "id-col",
                  title: "ID",
                  width: "112px",
                  key: "id",
                  render: row => {
                    return (
                      <>
                        <div className="cell-divider"></div>
                        <span>{row.id}</span>
                      </>
                    );
                  }
                },
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
                { title: "Исполнитель", width: "1fr", key: "executorName" }
              ]}
              data={[...orders, ...orders, ...orders, ...orders]}
            ></Table>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    orderCreateVisible: state.common.orderCreateVisible,
    orderEditVisible: state.common.orderEditVisible,
    orders: state.orders.orders,
    statusList: state.orders.statusList,
    prioritiesList: state.orders.prioritiesList,
    ordersTableLoading: state.common.ordersTableLoading,
    orderDetails: state.orders.orderDetails
  };
}
export default connect(
  mapStateToProps,
  {
    getOrdersList,
    getStatusList,
    getPrioritiesList,
    toggleOrderCreate,
    getOrderDetails,
    toggleOrderEdit
  }
)(Orders);
