import { createElement, memo, useState } from "react";
import { Avatar, Comment, Tooltip } from "antd";
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined, UserOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

export default memo(function BlogCommentItem({ setReplyData, children, data }) {
  const reply = () => {
    setReplyData((draft) => {
      draft.replyName = data.name;
      draft.floor = data.floor;
      draft.isInner = true;
    });
  };
  const actions = [
    <span key="comment-basic-reply-to" onClick={reply}>
      回复
    </span>,
  ];
  return (
    <Comment
      className={"blog-comments-item"}
      actions={actions}
      author={<a>{data.name}</a>}
      avatar={
        <Tooltip title={data.email}>
          <Avatar icon={<UserOutlined />} alt={data.name} />
        </Tooltip>
      }
      content={<p>{(data.replyName ? "回复@" + data.replyName + ":  " : "") + data.comment}</p>}
      datetime={<span>{dayjs(data.time).format("YYYY-MM-DD HH:mm:ss")}</span>}
    >
      {children}
    </Comment>
  );
});
