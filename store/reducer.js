import { HYDRATE } from "next-redux-wrapper";

const defaultState = {
  count: 0,
  name: "next-redux-wrapper"
};

// 创建 reducer
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "ADD":
      return { ...state, count: action.count };
    case "CHANGE_NAME":
      return { ...state, name: action.name };
    default:
      return state;
  }
};

export default reducer;
