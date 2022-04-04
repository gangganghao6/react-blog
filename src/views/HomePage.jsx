import {memo, useEffect, useState} from 'react';
import ContentCardItem from '../components/home/ContentCardItem';
import '../assets/style/Home/contentCards.scss';
import TopCard from '../components/home/TopCard';
import MyPagination from '../components/MyPagination';
import store from '../reducer/resso';
import {useRequest} from 'ahooks';
import {getBlogList, getSearchResult} from '../requests/home';
import HeaderRouter from '../components/HeaderRouter';
import {useLocation, useParams} from 'react-router-dom';
import {Empty, Skeleton} from 'antd';

export default memo(function home({type = 'home'}) {
 let location = useLocation();
 const {siderHide, setSiderHide} = store;
 const [page, setPage] = useState(1);
 let data, loading;
 let url = new URLSearchParams(location.search);
 if (type === 'home') {
  ({data, loading} = useRequest(getBlogList(page), {
   refreshDeps: [url.toString(), page],
  }));
 } else if (type === 'search') {
  ({data, loading} = useRequest(getSearchResult(url.get('type'), url.get('text'), page), {
   refreshDeps: [url.toString(), page],
  }));
 }

 useEffect(() => {
  if (!siderHide) {
   setSiderHide();
   window.scrollTo(0, 0);
  }
  return function () {
   setPage(1);
  }
 }, [location.search]);
 // useEffect(() => {
 // }, [type, url.get('tag')]);
 return (
     <>
      {type === 'home' ? <TopCard/> : ''}
      {type === 'search' ? <HeaderRouter path={'/'} name={'搜索结果'}/> : ''}
      {loading ? <Empty /> : data.data.data.count === 0 ? (
          <Empty/>) : ''}

      <div className={'left-content-article'}>
       {loading ? '' : data.data.data.list.map((item) => {
        return <ContentCardItem data={item} key={item.id}/>;
       })}
      </div>
      <div className={'left-content-pagination'}>
       <MyPagination current={page} total={loading ? 0 : data.data.data.count} setPage={setPage} pageSize={1}/>
      </div>
     </>
 );
});
