import {service} from "./request";

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

function findMaxFloor(totalComments) {
  let max = 0;
  totalComments.forEach((item) => {
    if (item.floor > max) {
      max = item.floor;
    }
  })
  return max;
}

export async function addComment(id, isInner, floor, replyName, name, email, comment, totalComments, type) {
  await service.patch("/updateInfoComments");
  if (!isInner) {
    totalComments[totalComments.length] = {
      floor: findMaxFloor(totalComments) + 1,
      name,
      comment,
      email,
      time: +new Date(),
      children: [],
    };
  } else {
    let target = totalComments.filter((item) => {
      return item.floor === floor;
    })
    target[0].children[target[0].children.length] = {
      floor: findMaxFloor(target[0].children) + 1,
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
