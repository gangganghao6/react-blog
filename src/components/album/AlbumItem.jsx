import { memo, Suspense } from "react";
import { Empty } from "antd";
import { NavLink } from "react-router-dom";
import { getPostSrc } from "../../requests/blog";
import AlbumItemUI from "./AlbumItemUI";
import { dataFecther } from "../../utils/dataFecther";

export default memo(function AlbumItem({ data }) {
  return (
    <>
      <NavLink to={`/album/${data.id}`} className={"album-item"}>
        <Suspense fallback={Empty.PRESENTED_IMAGE_DEFAULT}>
          <AlbumItemUI data={dataFecther(getPostSrc, data.postId)} />
        </Suspense>
        <div className={"album-title"}>{data.name}</div>
      </NavLink>
    </>
  );
});
