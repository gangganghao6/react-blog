import {memo, useEffect} from 'react';
import {EyeOutlined, FieldTimeOutlined, HeartOutlined, HighlightOutlined, MessageOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import {useRequest} from 'ahooks';
import {Space} from 'antd';
import {getPostSrc} from '../../requests/blog';

export default memo(
    function ContentCardItem({data: {type, id, postId, view, comments, time, title, content, tag}}) {
     let {data, loading} = useRequest(getPostSrc(postId));
     let total = comments.length;
     comments.forEach((item) => {
      total += item.innerComments.length;
     });
     return (
         <Link className={'left-content-article-item ' + (type === 1 ? 'type1' : 'type2')} to={'/blog/' + id}>
          <div className={'left-content-article-img-container'}>
           {data ? <img className={'left-content-article-img'} loading={'lazy'}
                        src={data.data.data.gzipSrc}/> : ''}
          </div>
          <div className={'left-content-article-text-container'}>
           <div className={'left-content-article-title'}>{title}</div>
           <div className={'left-content-article-content'}>{content}</div>
           <div className={'left-content-article-detail'}>
            <div className={'left-content-article-detail-item'}>
             <FieldTimeOutlined/>
             {dayjs(time).format('YYYY-MM-DD HH:mm:ss')}
            </div>
            <Space>
             <div className={'left-content-article-detail-item'}>
              <EyeOutlined/>
              {view}
             </div>
             <div className={'left-content-article-detail-item'}>
              <MessageOutlined/>
              {total}
             </div>
             <div className={'left-content-article-detail-item'}>
              <HighlightOutlined/>
              {tag.text}
             </div>
            </Space>
           </div>
          </div>
         </Link>
     );
    },
    (pre, cur) => {
     return pre.data.content === cur.data.content;
    }
);
