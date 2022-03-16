import { memo } from "react";
import { ForkOutlined, LinkOutlined, StarOutlined } from "@ant-design/icons";

export default memo(function GithubItem({ detail }) {
  return (
    <div className={"github-item-container"}>
      <div className={"github-item-title"}>{detail.name}</div>
      <div className={"github-item-description"}>{detail.description}</div>
      <div className={"github-item-others"}>
        <div className={"github-item-other"}>
          <StarOutlined /> {detail["stargazers_count"]} stars
        </div>
        /
        <div className={"github-item-other"}>
          <ForkOutlined /> {detail["forks_count"]} forks
        </div>
      </div>
      {/*<div className={'github-item-lang'}>{datail.languages}</div>*/}
      <a className={"github-item-url"} href={detail["html_url"]}>
        <LinkOutlined /> 访问
      </a>
    </div>
  );
});
