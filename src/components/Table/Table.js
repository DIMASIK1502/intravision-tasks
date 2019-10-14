import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Table.scss";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";

export default class Table extends Component {
  static propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array
  };
  getRows = () => {
    const { data, columns, onRowClick } = this.props;
    const templateColumns = columns.map(item => item.width).join(" ");
    return data.map((row, rowKey) => {
      return (
        <div
          {...(onRowClick && { onClick: () => onRowClick(row) })}
          style={{ gridTemplateColumns: templateColumns, display: "grid" }}
          className="table-row"
        >
          {columns.map((col, colKey) => (
            <div className={`row-cell ${col.className ? col.className : ""}`}>
              <div className="cell-content">
                {col.render ? col.render(row) : row[col.key]}
              </div>
            </div>
          ))}
        </div>
      );
    });
    // return data.map((item, key) =>
    //   columns.map((col, index) => (
    //     <div>{col.key && item[col.key] ? item[col.key] : ""}</div>
    //   ))
    // );
  };
  getColumns = () => {
    const { columns } = this.props;
    return columns.map((item, key) => (
      <div
        key={`col-key-${key}`}
        className={`table-header-col ${
          item.headerClassName ? item.headerClassName : ""
        }`}
      >
        <div className="col-content">{item.title}</div>
      </div>
    ));
  };
  render() {
    const { columns, loading } = this.props;
    const templateColumns = columns.map(item => item.width).join(" ");
    return (
      <div className="grid-table">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: templateColumns
          }}
          className="table-columns"
        >
          {this.getColumns()}
        </div>
        <LoadingOverlay loading={this.props.loading}>
          <div className="table-rows">{this.getRows()}</div>
        </LoadingOverlay>
      </div>
    );
  }
}
