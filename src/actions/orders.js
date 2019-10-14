import axios from "axios";
import { api, tenantguid } from "../config/config";
export function getOrdersList() {
  return dispatch => {
    dispatch({ type: "ORDERS_TABLE_LOADING", payload: true });
    return axios
      .get(`${api}/odata/tasks`, {
        params: {
          tenantguid: tenantguid
        }
      })
      .then(res => {
        dispatch({ type: "ORDERS_TABLE_LOADING", payload: false });
        dispatch({
          type: "GET_ORDERS_LIST",
          payload: res.data.value
        });
      })
      .catch(error => {
        dispatch({ type: "ORDERS_TABLE_LOADING", payload: false });
        console.log(error.message);
      });
  };
}
export function getStatusList() {
  return dispatch =>
    axios
      .get(`${api}/api/${tenantguid}/Statuses`)
      .then(res => {
        dispatch({
          type: "GET_STATUS_LIST",
          payload: res.data
        });
      })
      .catch(error => {
        console.log(error.message);
      });
}
export function getPrioritiesList() {
  return dispatch =>
    axios
      .get(`${api}/api/${tenantguid}/Priorities`)
      .then(res => {
        dispatch({
          type: "GET_PRIORITIES_LIST",
          payload: res.data
        });
      })
      .catch(error => {
        console.log(error.message);
      });
}

export function orderCreate(data) {
  return dispatch =>
    axios.post(`${api}/api/${tenantguid}/Tasks`, {
      name: data.name,
      description: data.description
    });
}
export function getOrderDetails(id) {
  return dispatch =>
    axios
      .get(`${api}/api/${tenantguid}/Tasks/${id}`)
      .then(res => {
        dispatch({ type: "GET_ORDER_DETAILS", payload: res.data });
      })
      .catch(err => {
        console.log(err.response);
      });
}
