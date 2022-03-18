import { memo } from "react";
import { Image } from "antd";
import { NavLink } from "react-router-dom";

export default memo(function AlbumItem({ data }) {
  return (
    <>
      <NavLink to={`/album/${data.id}`} className={"album-item"}>
        <img loading={"lazy"} src={`http://127.0.0.1:3000${data.post}`} alt={data.name} />
        <div className={"album-title"}>{data.name}</div>
      </NavLink>
    </>
  );
});
