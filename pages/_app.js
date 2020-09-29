import React from "react";
import { wrapper } from "../store/store";
import "antd/dist/antd.css";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
