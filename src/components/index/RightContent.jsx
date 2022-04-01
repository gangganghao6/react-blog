import {memo, useEffect} from 'react';
import RandomBlog from './RandomBlog';
import {Card, Tag} from 'antd';
import {
 FileMarkdownOutlined,
 FormatPainterOutlined,
 FundOutlined,
 ScheduleOutlined,
 SnippetsOutlined,
 TwitterOutlined,
} from '@ant-design/icons';
import {getInfo} from '../../requests';
import {useRequest} from 'ahooks';
import dayjs from 'dayjs';
import {parseTime} from '../../utils/timeFormat';

export default memo(function () {
 let {data, loading} = useRequest(getInfo);
 return (
     <div className={'right-content'}>
      <RandomBlog/>
      <Card title="博客信息" bordered={false}>
       <Tag icon={<FundOutlined/>} color="#55acee" className={'right-content-detail'}>
        访问次数 : {loading ? 0 : data.data.data.view}
       </Tag>
       <Tag icon={<FileMarkdownOutlined/>} color="#FA562E" className={'right-content-detail'}>
        文章数目 : {loading ? 0 : data.data.data.totalBlogs}
       </Tag>
       <Tag icon={<SnippetsOutlined/>} color="#1AA800" className={'right-content-detail'}>
        评论数目 : {loading ? 0 : data.data.data.totalComments}
       </Tag>
       <Tag icon={<ScheduleOutlined/>} color="#CD201F" className={'right-content-detail'}>
        运行天数 : {loading ? 0 : dayjs(+new Date()).diff(parseInt(data.data.data.startTime), 'day')}
       </Tag>
       <Tag icon={<FormatPainterOutlined/>} color="#7268F1" className={'right-content-detail'}>
        最后活动 : {loading ? 0 : dayjs(parseInt(data.data.data.lastModified)).format('YYYY-MM-DD')}
       </Tag>
      </Card>
     </div>
 );
});
