import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.scss";

import logo from "../../img/logo.png";
import BaseIcon from "../../img/book.png";
import OrdersIcon from "../../img/file.png";
import EmployeesIcon from "../../img/people.png";
import ClientsIcon from "../../img/city.png";
import ActivesIcon from "../../img/analytics.png";
import SettingsIcon from "../../img/settings.png";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div>
          <img className="sidebar-logo" src={logo} />
        </div>
        <div className="sidebar-nav">
          <NavLink exact={true} to="/" className="nav-item">
            <div>
              <img className="item-icon" alt="База знаний" src={BaseIcon}></img>
            </div>
            <span className="item-text">База знаний</span>
          </NavLink>
          <NavLink to="/orders" className="nav-item">
            <div>
              <img className="item-icon" alt="Заявки" src={OrdersIcon}></img>
            </div>
            <span className="item-text">Заявки</span>
          </NavLink>
          <NavLink to="/employees" className="nav-item">
            <div>
              <img
                className="item-icon"
                alt="Сотрудники"
                src={EmployeesIcon}
              ></img>
            </div>
            <span className="item-text">Сотрудники</span>
          </NavLink>
          <NavLink to="/clients" className="nav-item">
            <div>
              <img className="item-icon" alt="Клиенты" src={ClientsIcon}></img>
            </div>
            <span className="item-text">Клиенты</span>
          </NavLink>
          <NavLink to="/actives" className="nav-item">
            <div>
              <img className="item-icon" alt="Активы" src={ActivesIcon}></img>
            </div>
            <span className="item-text">Активы</span>
          </NavLink>
          <NavLink to="/settings" className="nav-item">
            <div>
              <img
                className="item-icon"
                alt="Настройки"
                src={SettingsIcon}
              ></img>
            </div>
            <span className="item-text">Настройки</span>
          </NavLink>
        </div>
      </div>
    );
  }
}
