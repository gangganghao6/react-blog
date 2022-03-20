import { service } from "./request";

export function getInfo() {
  service.patch("/updateInfoViews", {}).then();
  return service.get("/info");
}

export function getMdFile(name) {
  if (name === "") {
    return function () {
      return Promise.resolve("");
    };
  }
  return function () {
    return service.get(window.url + name);
  };
}

export function getHotList() {
  return service.get("/blogs", {
    params: {
      _sort: "views",
      _limit: 5,
      _order: "desc",
    },
  });
}
export function getRecommendList() {
  return service.get("/blogs", {
    params: {
      _limit: 5,
      recommend:true
    },
  });
}
export function getFooter() {
  return service.get('/footer')
}
