import React, { createElement, useState, memo } from "react";
import NProgress from "nprogress";
import { Tooltip } from "antd";
import { Comment, Avatar, Form, Button, List, Input } from "antd";
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled, UserOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import "../assets/style/Blog/blogComment.scss";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";
import { useImmer } from "use-immer";

export default memo(function BlogComments({ comments, id, type }) {
  // const [replyName, setReplyName] = useState('')
  const [replyData, setReplyData] = useImmer({});
  let total = comments.length;
  comments.forEach((item) => {
    total += item.children.length;
  });
  return (
    <div className={"blog-comments-container"}>
      <h1>{total}条评论</h1>
      {comments.map((item) => {
        return (
          <CommentItem setReplyData={setReplyData} data={item} key={item.time}>
            {item.children.map((itemx) => {
              return <CommentItem setReplyData={setReplyData} data={itemx} key={itemx.time}/>;
            })}
          </CommentItem>
        );
      })}
      <CommentInput replyData={replyData} id={id} totalComments={comments} type={type} />
    </div>
  );
});
