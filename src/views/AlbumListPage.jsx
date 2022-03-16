import { memo, useEffect } from "react";
import AlbumListItem from "../components/album/AlbumListItem";
import "../assets/style/Album/albumListContainer.scss";
import Comments from "../components/Comments";
import HeaderRouter from "../components/HeaderRouter";
import { useParams } from "react-router-dom";
import { useRequest } from "ahooks";
import { getAlbumDetail } from "../requests/album";
import store from "../reducer/resso";

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
      <HeaderRouter path={"/album"} name={"详情"} subTitle={"加载可能稍慢，耐心等待哦"} />
      <div className={"album-list-container"}>
        {data.data.images.map((item) => {
          return <AlbumListItem key={item} image={item} />;
        })}
        <Comments comments={data.data.comments} id={id} type={"albums"} />
      </div>
    </>
  );
});
