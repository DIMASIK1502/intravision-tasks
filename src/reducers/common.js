const initialState = {
  orderCreateVisible: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "TOGGLE_ORDER_CREATE_PANEL":
      return { ...state, orderCreateVisible: !state.orderCreateVisible };
    default:
      return state;
  }
};
