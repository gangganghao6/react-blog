import { memo } from "react";
import { Image } from "antd";
export default memo(function AlbumListItem({ image }) {
  return (
    <>
      <div className={"album-list-item"}>
        <Image loading={"lazy"} src={`http://192.168.31.30:3000${image}`} />
      </div>
    </>
  );
});
