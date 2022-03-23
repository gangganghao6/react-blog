import { memo, useEffect } from "react";
import AlbumListItem from "../components/album/AlbumListItem";
import "../assets/style/Album/albumListContainer.scss";
import Comments from "../components/Comments";
import HeaderRouter from "../components/HeaderRouter";
import MyPagination from "../components/MyPagination";
import { useParams } from "react-router-dom";
import { useRequest } from "ahooks";
import { getAlbumDetail } from "../requests/album";
import store from "../reducer/resso";
import { Image } from "antd";

export default memo(function AlbumListPage() {
  let { id } = useParams();
  let { siderHide, setSiderHide } = store;
  useEffect(() => {
    if (!siderHide) {
      setSiderHide();
      window.scrollTo(0, 0);
    }
  }, []);
  const { refresh } = store;
  let { data = { data: { images: [], comments: [] } } } = useRequest(getAlbumDetail(id), {
    refreshDeps: [refresh],
  });
  return (
    <>
      <HeaderRouter path={"/album"} name={data.data.images.length + "张照片"} subTitle={"加载可能稍慢，耐心等待哦"} />
      <div className={"album-list-container"}>
        <Image.PreviewGroup>
          {data.data.images.map((item) => {
            return <AlbumListItem key={item} image={item} />;
          })}
        </Image.PreviewGroup>
        <MyPagination />
        <Comments comments={data.data.comments} id={id} type={"albums"} />
      </div>
    </>
  );
});
