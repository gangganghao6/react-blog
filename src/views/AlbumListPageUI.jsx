import { memo, useState } from "react";
import MyPagination from "../components/MyPagination";
import Comments from "../components/Comments";
import AlbumListItem from "../components/album/AlbumListItem";
import { Image } from "antd";
import HeaderRouter from "../components/HeaderRouter";

export default memo(function AllbumListPageUI({ data, id }) {
  const { name, images, comments } = data.read().data.data;
  const [page, setPage] = useState(1);
  return (
    <>
      <HeaderRouter path={"/album"} name={`${name} — ${images.length}张照片`} subTitle={"加载可能稍慢，耐心等待哦"} />
      <div className={"album-list-container"}>
        <Image.PreviewGroup>
          {images.slice((page - 1) * 40, page * 40).map((item) => {
            return <AlbumListItem key={item.id} image={item} />;
          })}
        </Image.PreviewGroup>
        <MyPagination total={images.length} current={page} setPage={setPage} pageSize={40} />
        <Comments comments={comments} id={id} type={"albums"} />
      </div>
    </>
  );
});
