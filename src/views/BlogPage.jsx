import { memo, useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import BlogTitle from "../components/blog/BlogTitle";
import Content from "../components/blog/BlogContent";
import Comments from "../components/Comments";
import NProgress from "nprogress";
import store from "../reducer/resso";
import { useRequest } from "ahooks";
import { getBlogDetail } from "../requests/blog";
import dayjs from "dayjs";
import { getMdFile } from "../requests";

export default memo(function Blog({ id = undefined }) {
  const { siderHide, setSiderHide, refresh } = store;
  const params = useParams();
  if (id === undefined) {
    id = params.id;
  }
  let { data } = useRequest(getBlogDetail(id), {
    refreshDeps: [refresh, id],
  });
  let views = 0,
    comments = [],
    time = 0,
    title = "",
    content = "",
    tags = [],
    lastModified = 0;
  if (data) {
    ({ views = 0, comments = [], time = 0, title = "", content = "", lastModified = 0, tags = [] } = data.data);
  }
  let { data: data2, error } = useRequest(getMdFile(content), {
    refreshDeps: [content],
  });
  if (data2) {
    content = data2 ? data2.data : "";
  }

  useEffect(() => {
    if (!siderHide) {
      setSiderHide();
    }
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <>
      <BlogTitle
        msg={{
          title,
          time: dayjs(time).format("YYYY-MM-DD HH:mm:ss"),
          lastModified: dayjs(lastModified).format("YYYY-MM-DD HH:mm:ss"),
          views,
          comments: comments.length,
          words: content.length,
          tags,
        }}
      />
      <Content content={content} lastModified={lastModified} />
      <Comments comments={comments} id={id} type={"blogs"} />
    </>
  );
});
