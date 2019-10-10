import axios from "axios";
import { api, tenantguid } from "../config/config";
export function getOrdersList() {
  return dispatch =>
    axios
      .get(`${api}/odata/tasks`, {
        params: {
          tenantguid: tenantguid
        }
      })
      .then(res => {
        dispatch({
          type: "GET_ORDERS_LIST",
          payload: res.data.value
        });
      })
      .catch(error => {
        console.log(error.message);
      });
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
