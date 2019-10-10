import axios from "axios/index";

export function togglePanelState(state) {
  return dispatch =>
    dispatch({
      type: "TOGGLE_NOTIFICATION_PANEL",
      payload: !state
    });
}

export function toggleVisiblePanelState(state) {
  return dispatch =>
    dispatch({
      type: "TOGGLE_NOTIFICATION_VISIBLE_PANEL",
      payload: !state
    });
}

export function toggleCallsState(state) {
  return dispatch =>
    dispatch({
      type: "TOGGLE_CALLS_PANEL",
      payload: !state
    });
}

export function toggleVisibleCallsState(state) {
  return dispatch =>
    dispatch({
      type: "TOGGLE_CALLS_VISIBLE_PANEL",
      payload: !state
    });
}

export function toggleStatisticsLoading(state) {
  return dispatch =>
    dispatch({
      type: "TOGGLE_LOADING_STATISTICS",
      payload: !state
    });
}

export function sendError(data) {
  const config = {
    headers: {
      Accept: "application/json"
    }
  };

  const body = {
    data: data
  };

  return () => axios.post("/api/v1/logging/", body, config);
}
export function toggleOrderCreate() {
  return dispatch => dispatch({ type: "TOGGLE_ORDER_CREATE_PANEL" });
}
