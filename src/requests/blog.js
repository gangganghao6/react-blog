import { service } from "./request";

export function getBlogDetail(id) {
  return function () {
    service
      .patch("/updateBlogViews", {
        id,
      })
      .then();
    return service.get(`/blogs/${id}`);
  };
}

export async function addComment(id, isInner, floor, replyName, name, email, comment, totalComments, type) {
  await service.patch("/updateInfoComments");
  if (!isInner) {
    totalComments[totalComments.length] = {
      floor: totalComments.length + 1,
      name,
      comment,
      email,
      time: +new Date(),
      children: [],
    };
  } else {
    totalComments[floor - 1].children[totalComments[floor - 1].children.length] = {
      floor: totalComments[floor - 1].children.length + 1,
      name,
      comment,
      email,
      time: +new Date(),
      replyName,
    };
  }
  return service.patch(`/${type}/${id}`, {
    comments: totalComments,
  });
}
