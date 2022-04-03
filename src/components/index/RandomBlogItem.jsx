import {memo} from 'react';
import '../../assets/style/Index/randomBlogItem.scss';
import {EyeOutlined, FieldTimeOutlined, MessageOutlined} from '@ant-design/icons';
import {NavLink} from 'react-router-dom';
import dayjs from 'dayjs';
import {useRequest} from 'ahooks';
import {getPostSrc} from '../../requests/blog';
import {parseTime} from '../../utils/timeFormat';

export default memo(function ({title, postId, view, id, time}) {
 let {data} = useRequest(getPostSrc(postId), {
  refreshDeps: []
 });

 return (
     <NavLink to={`/blog/${id}`}>
      <div className={'random-blog-item'}>
       <div className={'random-blog-item-img-container'}>
        {data ? <img src={data.data.data.gzipSrc} alt={'header'}/> : ''}
       </div>
       <div className={'random-blog-item-title'}>
        {title}
        <div className={'random-blog-item-detail'}>
         <EyeOutlined/> {view} <FieldTimeOutlined/> {dayjs(parseInt(time)).format('YYYY-MM-DD')}
        </div>
       </div>
      </div>
     </NavLink>
 );
});
