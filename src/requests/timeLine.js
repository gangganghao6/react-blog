import { service } from "./request";

export function getTimeLine() {
  return service.get("/timeLine", {
    params: {
      _sort: "id",
      _order: "desc",
    },
  });
}
