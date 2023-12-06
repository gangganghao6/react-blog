import { service } from "./request";
import { message } from "antd";

export function getBlogList(page = 1) {
  return service.get("/blogs", {
    params: {
      pageNum: page,
      pageSize: 10,
    },
  });
}

export async function getTopBlog() {
  const pre = await service.get("/info/topCard");
  let result, result2;
  try {
    result = await service.get(`/blogs/${pre.data.data.topCardId}`);
    result2 = await service.get(`/images/${result.data.data.postId}`);
  } catch (e) {
    message.error('请先去管理端配置头部文章')
  }
  await service.put(`/blogs/view/${pre.data.data.topCardId}`, {
    value: -1,
  });
  return (
    result || {
      title: result.data.data.title,
      content: result.data.data.content,
      gzipSrc: result2.data.data.gzipSrc,
      color: pre.data.data.topCardColor,
      id: pre.data.data.topCardId,
    }
  );
}

export function getSearchResult(type, key, page = 1) {
  if (type === "tags") {
    return service.get("/blogs/search", {
      params: {
        pageNum: page,
        pageSize: 10,
        tag: key,
      },
    });
  } else {
    return service.get("/blogs/search", {
      params: {
        pageNum: page,
        pageSize: 10,
        text: key,
      },
    });
  }
}
