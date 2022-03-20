import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "rc-footer/assets/index.css";
import "nprogress/nprogress.css";
import init from "./utils/init";
import zhCN from "antd/lib/locale/zh_CN";
import { ConfigProvider } from "antd";
// window.url="http://192.168.31.30:8082"
window.url='http://39.105.105.42:8082'
init();

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <App />
      </HashRouter>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
