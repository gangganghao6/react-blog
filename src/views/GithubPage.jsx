import {memo, useEffect, useState} from 'react';
import '../assets/style/Github/githubItem.scss';
import axios from 'axios';
import {useRequest} from 'ahooks';
import HeaderRouter from '../components/HeaderRouter';
import GithubItem from '../components/github/GithubItem';
import store from '../reducer/resso';
import NProgress from 'nprogress';
import {service} from '../requests/request';
import dayjs from 'dayjs';
import MyPagination from '../components/MyPagination';

function getRepo(page) {
 return function () {
  return service.get('https://api.github.com/users/gangganghao6/repos', {
   params: {
    sort: 'pushed',
   }
  });
 };
}

export default memo(function GithubPage() {
 const {siderHide, setSiderHide} = store;
 const [page, setPage] = useState(1);
 let {data = {data: []}} = useRequest(getRepo(page), {
  refreshDeps: [],
 });
 // data.data.sort((a, b) => {
 //   return dayjs(b["pushed_at"]) - dayjs(a["pushed_at"])
 // })
 useEffect(() => {
  if (!siderHide) {
   setSiderHide();
   window.scrollTo(0, 0);
  }
 }, []);
 return (
     <>
      <HeaderRouter/>
      <div className={'github-container'}>
       {data.data.slice((page - 1) * 10, page * 10).map((item) => {
        return <GithubItem key={item.id} detail={item}/>;
       })}
       <MyPagination current={page} total={data.data.length} setPage={setPage} pageSize={10}/>
      </div>
     </>
 );
});
