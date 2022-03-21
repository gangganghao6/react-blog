import { memo, useEffect } from "react";
import { EyeOutlined, FieldTimeOutlined, HeartOutlined, HighlightOutlined, MessageOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { useRequest } from "ahooks";
import { getMdFile } from "../../requests";
import { Space } from "antd";

export default memo(
  function ContentCardItem({ data: { type, id, post, views, comments, time, title, content, tags } }) {
    let { data } = useRequest(getMdFile(content));
    let total = comments.length;
    let splits = post.split('/')
    splits[3]=`gzip_${splits[3]}`
    let all=splits.join('/')
    comments.forEach((item) => {
      total += item.children.length;
    });
    content = data ? data.data : "";
    return (
      <Link className={"left-content-article-item " + (type === 1 ? "type1" : "type2")} to={"/blog/" + id}>
        <div className={"left-content-article-img-container"}>
          <img className={"left-content-article-img"} loading={"lazy"} src={`${window.url}${all}`} />
        </div>
        <div className={"left-content-article-text-container"}>
          <div className={"left-content-article-title"}>{title}</div>
          <div className={"left-content-article-content"}>{content}</div>
          <div className={"left-content-article-detail"}>
            <div className={"left-content-article-detail-item"}>
              <FieldTimeOutlined />
              {dayjs(time).format("YYYY-MM-DD HH:mm:ss")}
            </div>
            <Space>
              <div className={"left-content-article-detail-item"}>
                <EyeOutlined />
                {views}
              </div>
              <div className={"left-content-article-detail-item"}>
                <MessageOutlined />
                {total}
              </div>
              <div className={"left-content-article-detail-item"}>
                <HighlightOutlined />
                {tags}
              </div>
            </Space>
          </div>
        </div>
      </Link>
    );
  },
  (pre, cur) => {
    return pre.data.content === cur.data.content;
  }
);
