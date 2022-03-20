import { memo } from "react";
import { Image } from "antd";
import { NavLink } from "react-router-dom";

export default memo(function AlbumItem({ data }) {
  return (
    <>
      <NavLink to={`/album/${data.id}`} className={"album-item"}>
        <img loading={"lazy"} src={`${window.url}${data.gzipImages[0]}`} alt={data.name} />
        <div className={"album-title"}>{data.name}</div>
      </NavLink>
    </>
  );
});
