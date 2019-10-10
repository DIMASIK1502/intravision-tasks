import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./Home.scss";

export default class Home extends Component {
  render() {
    return (
      <>
      <Link to="/orders/create">aaaa</Link>
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
            <tr>
              <td>
                <div>
                  <div className="cell-border"></div>
                  aye
                </div>
              </td>
              <td>Не работет кнопка печати</td>
              <td>d12</td>
              <td>dass</td>
            </tr>
            <tr>
              <td>50 061</td>
              <td>Не работет кнопка печати</td>
              <td>d12</td>
              <td>dass</td>
            </tr>
            <tr>
              <td>50 061</td>
              <td>Не работет кнопка печати</td>
              <td>d12</td>
              <td>dass</td>
            </tr>
            <tr>
              <td>50 061</td>
              <td>Не работет кнопка печати</td>
              <td>d12</td>
              <td>dass</td>
            </tr>
          </tbody>
        </table>
      </div></>
    );
  }
}
