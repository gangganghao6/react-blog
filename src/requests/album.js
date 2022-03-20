import { service } from "./request";

export function getAlbumList() {
  return service.get("/albums", {
    params: {
      _sort: "id",
      _order: "desc",
    },
  });
}

export function getAlbumDetail(id = 1) {
  return function () {
    service.patch('/updateAlbumViews',{id}).then()
    return service.get(`/albums/${id}`);
  };
}
