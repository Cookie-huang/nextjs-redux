import { createStore, compose, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import reducer from "./reducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// 创建 makeStore function
const makeStore = context =>
  createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// 导出一个集合包装 hoc
export const wrapper = createWrapper(makeStore, { debug: true });
