import "../../assets/style/Index/header.scss";
import { memo } from "react";
import { Button, Input } from "antd";
import store from "../../reducer/resso";
import { AppstoreFilled, SearchOutlined } from "@ant-design/icons";

const { Search } = Input;
export default memo(function () {
  let { setSiderHide, headerOtherHide, setHeaderOtherHide } = store;
  const onSearch = (e) => {
    console.log(e);
  };
  return (
    <div className={"header"}>
      <Button type={"text"} onClick={setSiderHide} className={"search-button-min"} icon={<AppstoreFilled />} />
      <div className={"header-logo"}>Pikachu的博客</div>
      <div className={"header-right"}>
        <Button type={"text"} onClick={setHeaderOtherHide} className={"search-button-min"} icon={<SearchOutlined />} />
        <div className={"header-right-others " + (headerOtherHide ? "hide" : "show")}>
          <div
            className={"header-right-others-mask " + (headerOtherHide ? "hide" : "show")}
            onClick={setHeaderOtherHide}
          />
          <Search placeholder="input search text" allowClear onSearch={onSearch} className={"search-button-max"} />
        </div>
      </div>
    </div>
  );
});
