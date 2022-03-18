import { memo } from "react";
import { Image } from "antd";
export default memo(function AlbumListItem({ image }) {
  return (
    <>
      <div className={"album-list-item"}>
        <Image loading={"lazy"} src={`http://127.0.0.1:3000${image}`} />
      </div>
    </>
  );
});
