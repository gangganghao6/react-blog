import { memo, useEffect } from "react";
import RandomBlog from "./RandomBlog";
import { Card, Tag } from "antd";
import {
  FileMarkdownOutlined,
  FormatPainterOutlined,
  FundOutlined,
  ScheduleOutlined,
  SnippetsOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { getInfo } from "../../requests";
import { useRequest } from "ahooks";
import dayjs from "dayjs";

export default memo(function () {
  let { data } = useRequest(getInfo);
  let days = "加载中...";
  let blogCount = "加载中...";
  let commentCount = "加载中...";
  let lastActive = "加载中...";
  let visitCount = "加载中...";
  if (data) {
    days = dayjs(+new Date()).diff(data.data.startTime, "day");
    lastActive = dayjs(data.data.lastActive).format("YYYY-MM-DD");
    ({ blogCount, commentCount, visitCount } = data.data);
  }
  return (
    <div className={"right-content"}>
      <RandomBlog />
      <Card title="博客信息" bordered={false}>
        <Tag icon={<FundOutlined />} color="#55acee" className={"right-content-detail"}>
          访问次数 : {visitCount}
        </Tag>
        <Tag icon={<FileMarkdownOutlined />} color="#FA562E" className={"right-content-detail"}>
          文章数目 : {blogCount}
        </Tag>
        <Tag icon={<SnippetsOutlined />} color="#1AA800" className={"right-content-detail"}>
          评论数目 : {commentCount}
        </Tag>
        <Tag icon={<ScheduleOutlined />} color="#CD201F" className={"right-content-detail"}>
          运行天数 : {days}
        </Tag>
        <Tag icon={<FormatPainterOutlined />} color="#7268F1" className={"right-content-detail"}>
          最后活动 : {lastActive}
        </Tag>
      </Card>
    </div>
  );
});
