import "../../assets/style/Index/leftSider.scss";
import { memo, useState } from "react";
import { Button, Card } from "antd";
import store from "../../reducer/resso";
import {
  GithubOutlined,
  HomeOutlined,
  PictureOutlined,
  SendOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Collapse } from "antd";
import { NavLink } from "react-router-dom";
import Tags from "../tags/Tags";

const { Meta } = Card;
const { Panel } = Collapse;

export default memo(function () {
  let { siderHide, setSiderHide } = store;

  return (
    <div className={"total-sider " + (siderHide ? "sider-hide" : "sider-show")}>
      <div className={"left-sider-container"}>
        <div className={"left-sider"}>
          <NavLink className={"left-sider-my"} to={"/about"}>
            <Card
              className={"left-sider-my-card"}
              cover={
                <img
                  className={"left-sider-my-img"}
                  alt="example"
                  loading={"lazy"}
                  src="http://192.168.31.30:3000/websiteImages/header.jpg"
                />
              }
            >
              <Meta title="Pikachu" description="一个倾尽全力的小前端" style={{ textAlign: "center" }} />
            </Card>
          </NavLink>
          <NavLink to={"/"}>
            <Collapse bordered={false} expandIcon={() => <HomeOutlined />} className={"left-sider-menu-item-first"}>
              <Panel header="首页" key="1" />
            </Collapse>
          </NavLink>
          <NavLink to={"/album"}>
            <Collapse bordered={false} expandIcon={() => <PictureOutlined />} className={"left-sider-menu-item-first"}>
              <Panel header="相册" key="2" />
            </Collapse>
          </NavLink>
          <NavLink to={"/timeline"}>
            <Collapse bordered={false} expandIcon={() => <SendOutlined />} className={"left-sider-menu-item-first"}>
              <Panel header="时间线" key="3" />
            </Collapse>
          </NavLink>
          <NavLink to={"/github"}>
            <Collapse bordered={false} expandIcon={() => <GithubOutlined />} className={"left-sider-menu-item-first"}>
              <Panel header="Github展示" key="4" />
            </Collapse>
          </NavLink>
          <NavLink to={"/about"}>
            <Collapse bordered={false} expandIcon={() => <UserOutlined />} className={"left-sider-menu-item-first"}>
              <Panel header="关于我" key="4" />
            </Collapse>
          </NavLink>
          <Tags />
        </div>
      </div>
      <div className={"left-sider-footer"}>
        <Button
          type={"text"}
          className={"left-sider-footer-button"}
          onClick={() => {
            console.log("dianji");
          }}
        >
          <SettingOutlined />
          管理
        </Button>
        <Button
          type={"text"}
          className={"left-sider-footer-button"}
          onClick={() => {
            console.log("dianji");
          }}
        >
          按钮1
        </Button>
        <Button
          type={"text"}
          className={"left-sider-footer-button"}
          onClick={() => {
            console.log("dianji");
          }}
        >
          按钮1
        </Button>
      </div>
    </div>
  );
});
