export function toggleOrderCreate(value = null) {
  return dispatch =>
    dispatch({ type: "TOGGLE_ORDER_CREATE_PANEL", payload: value });
}
export function toggleOrderEdit(value = null) {
  return dispatch =>
    dispatch({ type: "TOGGLE_ORDER_EDIT_PANEL", payload: value });
}
