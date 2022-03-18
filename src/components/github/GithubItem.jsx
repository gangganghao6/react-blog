import {memo} from "react";
import {ForkOutlined, LinkOutlined, StarOutlined} from "@ant-design/icons";
import dayjs from "dayjs";

export default memo(function GithubItem({detail}) {
  return (
      <div className={"github-item-container"}>
        <div className={"github-item-title"}>{detail.name}</div>
        <div className={"github-item-description"}>{detail.description === null ? "(暂无描述)" : detail.description}</div>

        <div className={"github-item-others"}>
          <div className={"github-item-other"}>
            <StarOutlined/> {detail["stargazers_count"]} stars
          </div>
          /
          <div className={"github-item-other"}>
            <ForkOutlined/> {detail["forks_count"]} forks
          </div>
        </div>
        <div className={"github-item-description"}>最后更新于：{dayjs(detail.pushed_at).format("YYYY-MM-DD HH:mm:ss")}</div>
        <a className={"github-item-url"} href={detail["html_url"]}>
          <LinkOutlined/> 访问
        </a>
      </div>
  );
});
