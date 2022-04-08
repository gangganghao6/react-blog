import {memo, useEffect, useState, Suspense, startTransition} from 'react';
import '../assets/style/Home/contentCards.scss';
import TopCard from '../components/home/TopCard';
import store from '../reducer/resso';
import {getBlogList, getSearchResult, getTopBlog} from '../requests/home';
import HeaderRouter from '../components/HeaderRouter';
import {useLocation} from 'react-router-dom';
import {Skeleton} from 'antd';
import HomePageUI from './HomePageUI';
import {dataFecther} from '../utils/dataFecther';

export default memo(function home({type = 'home'}) {
 let location = useLocation();
 const {siderHide, setSiderHide} = store;
 const [page, setPage] = useState(1);
 let url = new URLSearchParams(location.search);
 useEffect(() => {
  if (!siderHide) {
   startTransition(()=>{
    setSiderHide();
   });
   window.scrollTo(0, 0);
  }
  return function () {
   setPage(1);
  };
 }, [location.search]);
 return (
     <>
      <Suspense fallback={<><Skeleton/><Skeleton/></>}>
       {type === 'home' ? <TopCard data={dataFecther(getTopBlog)}/> : ''}
      </Suspense>
      {type === 'search' ? <HeaderRouter name={'搜索结果'}/> : ''}
      <Suspense fallback={<Skeleton/>}>
       <HomePageUI
           data={
            type === 'home'
                ? dataFecther(getBlogList(page))
                : type === 'search' ? dataFecther(getSearchResult, url.get('type'), url.get('text'), page) : ''
           }
           page={page}
           setPage={setPage}
       />
      </Suspense>
     </>
 );
});
