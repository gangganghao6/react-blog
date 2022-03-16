import { memo, useEffect } from "react";
import store from "../reducer/resso";
import AlbumItem from "../components/album/AlbumItem";
import "../assets/style/Album/albumContainer.scss";
import HeaderRouter from "../components/HeaderRouter";
import Pagination from "../components/Pagination";
import { useRequest } from "ahooks";
import { getAlbumList } from "../requests/album";
import AlbumListItem from "../components/album/AlbumListItem";

export default memo(function AlbumPage() {
  const { siderHide, setSiderHide } = store;
  let { data = { data: [] } } = useRequest(getAlbumList);
  useEffect(() => {
    if (!siderHide) {
      setSiderHide();
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeaderRouter path={"/"} name={"相册"} />
      <div className={"album-container"}>
        {data.data.map((item) => {
          return <AlbumItem key={item.id} data={item} />;
        })}
      </div>
    </>
  );
});
