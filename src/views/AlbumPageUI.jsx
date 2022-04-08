import {memo} from 'react';
import AlbumItem from '../components/album/AlbumItem';
import {Empty} from 'antd';

export default memo(function AlbumPageUI({data}) {
 const {list, count} = data.read().data.data;
 return <>
  <div className={'album-container'}>
   {count === 0 ? <Empty/> : ''}
   {list.map((item) => {
    return <AlbumItem key={item.id} data={item}/>;
   })}
  </div>
 </>;
});
