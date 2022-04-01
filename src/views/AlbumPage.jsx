import {memo, useEffect} from 'react';
import store from '../reducer/resso';
import AlbumItem from '../components/album/AlbumItem';
import '../assets/style/Album/albumContainer.scss';
import HeaderRouter from '../components/HeaderRouter';
import MyPagination from '../components/MyPagination';
import {useRequest} from 'ahooks';
import {getAlbumList} from '../requests/album';
import AlbumListItem from '../components/album/AlbumListItem';
import {Empty} from 'antd';

export default memo(function AlbumPage() {
 const {siderHide, setSiderHide} = store;
 let {data, loading} = useRequest(getAlbumList);
 useEffect(() => {
  if (!siderHide) {
   setSiderHide();
  }
  window.scrollTo(0, 0);
 }, []);
 return (
     <>
      <HeaderRouter path={'/'} name={'相册'}/>
      {loading ? <Empty /> : data.data.data.count === 0 ? (
         <Empty/>) : ''}
      <div className={'album-container'}>
       {loading ? '' : data.data.data.list.map((item) => {
        return <AlbumItem key={item.id} data={item}/>;
       })}
      </div>
     </>
 );
});
