import { service } from "./request";

export function getBlogList(page = 1) {
  return function () {
    return service.get("/blogs", {
      params: {
        _page: page,
        _limit: 10,
        _sort: "id",
        _order: "desc",
      },
    });
  };
}

export function getSearchResult(type, key, page = 1) {
  return function () {
    if (type === "tags") {
      return service.get("/blogs", {
        params: {
          _page: page,
          _limit: 10,
          _sort: "id",
          _order: "desc",
          tags: key,
        },
      });
    } else {
      return service.get("/blogs", {
        params: {
          _page: page,
          _limit: 10,
          _sort: "id",
          _order: "desc",
          q: key,
        },
      });
    }
  };
}
