const initialState = {
  orders: [],
  statusList: [],
  prioritiesList: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_ORDERS_LIST":
      return { ...state, orders: action.payload };
    case "GET_STATUS_LIST":
      return { ...state, statusList: action.payload };
    case "GET_PRIORITIES_LIST":
      return { ...state, prioritiesList: action.payload };
    default:
      return state;
  }
};
