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
    return service.get("http://192.168.31.30:3000" + name);
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
