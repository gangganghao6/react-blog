import { memo } from "react";
import "../../assets/style/Index/randomBlogItem.scss";
import { EyeOutlined, FieldTimeOutlined, MessageOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";

export default memo(function ({ title, post, views, id, time }) {
  return (
    <NavLink to={`/blog/${id}`}>
      <div className={"random-blog-item"}>
        <div className={"random-blog-item-img-container"}>
          <img src={`${post}`} loading={"lazy"} alt={"header"} />
        </div>
        <div className={"random-blog-item-title"}>
          {title}
          <div className={"random-blog-item-detail"}>
            <EyeOutlined /> {views} <FieldTimeOutlined /> {dayjs(time).format("YYYY-MM-DD")}
          </div>
        </div>
      </div>
    </NavLink>
  );
});
