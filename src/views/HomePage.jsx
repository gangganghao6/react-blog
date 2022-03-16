import { memo, useEffect, useState } from "react";
import ContentCardItem from "../components/home/ContentCardItem";
import "../assets/style/Home/contentCards.scss";
import TopCard from "../components/home/TopCard";
import Pagination from "../components/Pagination";
import store from "../reducer/resso";
import { useRequest } from "ahooks";
import { getBlogList, getSearchResult } from "../requests/home";
import HeaderRouter from "../components/HeaderRouter";
import { useLocation, useParams } from "react-router-dom";

export default memo(function home({ type = "home" }) {
  let location = useLocation();
  const { siderHide, setSiderHide } = store;
  const [page, setPage] = useState(1);
  let data;
  let url = new URLSearchParams(location.search);
  if (type === "home") {
    ({ data } = useRequest(getBlogList(page), {
      refreshDeps: [url.toString()],
    }));
  } else if (type === "search") {
    ({ data } = useRequest(getSearchResult(url.get("type"), url.get("tag"), page), {
      refreshDeps: [url.toString()],
    }));
  }

  data = data ? data : { data: [], headers: { "x-total-count": 1 } };

  useEffect(() => {
    if (!siderHide) {
      setSiderHide();
      window.scrollTo(0, 0);
    }
  }, [location.search]);
  return (
    <>
      {type === "home" ? <TopCard /> : ""}
      {type === "search" ? <HeaderRouter path={"/"} name={"搜索结果"} /> : ""}
      <div className={"left-content-article"}>
        {data.data.map((item) => {
          return <ContentCardItem data={item} key={item.id} />;
        })}
      </div>
      <div className={"left-content-pagination"}>
        <Pagination total={data.headers["x-total-count"]} setPage={setPage} />
      </div>
    </>
  );
});
