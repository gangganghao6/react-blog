import {memo} from 'react';
import {Empty, Image} from 'antd';
import {NavLink} from 'react-router-dom';
import {useRequest} from 'ahooks';
import {getPostSrc} from '../../requests/blog';

export default memo(function AlbumItem({data}) {
 let {data: data1, loading} = useRequest(getPostSrc(data.postId));
 return (
     <>
      <NavLink to={`/album/${data.id}`} className={'album-item'}>
       {data1 ?
           <img loading={'lazy'} src={data1.data.data.gzipSrc} alt={loading ? '' : data.name}/> : ''}
       <div className={'album-title'}>{data.name}</div>
      </NavLink>
     </>

 );
});
