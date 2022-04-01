import {memo, useEffect, useState} from 'react';
import AlbumListItem from '../components/album/AlbumListItem';
import '../assets/style/Album/albumListContainer.scss';
import Comments from '../components/Comments';
import HeaderRouter from '../components/HeaderRouter';
import MyPagination from '../components/MyPagination';
import {useParams} from 'react-router-dom';
import {useRequest} from 'ahooks';
import {getAlbumDetail} from '../requests/album';
import store from '../reducer/resso';

import {Empty, Image} from 'antd';

export default memo(function AlbumListPage() {
 let {id} = useParams();
 let {siderHide, setSiderHide, refresh} = store;
 useEffect(() => {
  if (!siderHide) {
   setSiderHide();
   window.scrollTo(0, 0);
  }
 }, []);
 let {data, loading} = useRequest(getAlbumDetail(id), {
  refreshDeps: [refresh],
 });
 // const [images, setImages] = useState([]);
 let images = [], comments = [];
 if (data) {
  ({images, comments} = data.data.data);
 }
 return (
     <>
      <HeaderRouter path={'/album'} name={images.length + '张照片'}
                    subTitle={'加载可能稍慢，耐心等待哦'}/>
      {data ? '' : <Empty/>}
      <div className={'album-list-container'}>
       <Image.PreviewGroup>
        {images.map((item) => {
         return <AlbumListItem key={item.id} image={item}/>;
        })}
       </Image.PreviewGroup>
       <MyPagination/>
       <Comments comments={comments} id={id} type={'albums'}/>
      </div>
     </>
 );
});
