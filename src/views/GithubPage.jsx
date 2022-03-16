import { memo, useEffect } from "react";
import "../assets/style/Github/githubItem.scss";
import axios from "axios";
import { useRequest } from "ahooks";
import HeaderRouter from "../components/HeaderRouter";
import GithubItem from "../components/github/GithubItem";
import store from "../reducer/resso";
import NProgress from "nprogress";
import { service } from "../requests/request";

function getRepo() {
  return service.get("https://api.github.com/users/gangganghao6/repos");
}

export default memo(function GithubPage() {
  let { data = { data: [] } } = useRequest(getRepo);
  const { siderHide, setSiderHide } = store;
  useEffect(() => {
    if (!siderHide) {
      setSiderHide();
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <>
      <HeaderRouter />
      <div className={"github-container"}>
        {data.data.map((item) => {
          return <GithubItem key={item.id} detail={item} />;
        })}
      </div>
    </>
  );
});
