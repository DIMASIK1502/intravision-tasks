const initialState = {
  orderCreateVisible: false,
  orderEditVisible: false,
  ordersTableLoading: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "TOGGLE_ORDER_CREATE_PANEL":
      return {
        ...state,
        orderEditVisible: false,
        orderCreateVisible:
          action.payload === null ? !state.orderCreateVisible : action.payload
      };
    case "ORDERS_TABLE_LOADING":
      return { ...state, ordersTableLoading: action.payload };
    case "TOGGLE_ORDER_EDIT_PANEL":
      return {
        ...state,
        orderCreateVisible: false,
        orderEditVisible:
          action.payload === null ? !state.orderEditVisible : action.payload
      };
    default:
      return state;
  }
};
