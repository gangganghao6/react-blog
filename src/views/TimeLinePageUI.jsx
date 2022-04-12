import {memo, useId, useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {Skeleton, Timeline} from 'antd';
import dayjs from 'dayjs';
import {ClockCircleOutlined} from '@ant-design/icons';

export default memo(function TimeLinePageUI({data}) {
 const result = data.read().data.data;
 const [page, setPage] = useState(1);
 const temp = result.slice(0, page * 20);
 return (
     <>
      <InfiniteScroll
          dataLength={temp.length}
          hasMore={result.length > page * 20}
          next={() => {
           setPage((pre) => pre + 1);
          }}
          loader={<Skeleton active/>}>
       <Timeline mode="alternate" className={'timeline'}>
        {temp.map((item) => {
         return (
             <Timeline.Item
                 key={item.id}
                 label={dayjs(parseInt(item.time)).format('YYYY-MM-DD')}
                 dot={<ClockCircleOutlined style={{fontSize: '16px'}}/>}
             >
              {item.text}
             </Timeline.Item>
         );
        })}
       </Timeline>
      </InfiniteScroll>
     </>
 );
});
