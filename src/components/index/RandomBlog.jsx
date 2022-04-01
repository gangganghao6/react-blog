import {memo} from 'react';
import {Tabs} from 'antd';
import RandomBlogItem from './RandomBlogItem';
import {useRequest} from 'ahooks';
import {getHotAndRecommendList} from '../../requests';

const {TabPane} = Tabs;


export default memo(function RandomBlog() {
 let {data} = useRequest(getHotAndRecommendList, {
  refreshDeps: []
 });
 return (
     <>
      <Tabs defaultActiveKey="1" centered>
       <TabPane tab="热门文章" key="1">
        <div className={'random-blog-container'}>
         {data ? data.data.data.hot.map((item) => {
          return <RandomBlogItem postId={item.postId} title={item.title} view={item.view} id={item.id} key={item.id}
                                 time={item.time}/>;
         }):'加载中'}
        </div>
       </TabPane>
       <TabPane tab="推荐文章" key="2">
        <div className={'random-blog-container'}>
         {data ? data.data.data.recommend.map((item) => {
          return <RandomBlogItem postId={item.postId} title={item.title} view={item.view} id={item.id} key={item.id}
                                 time={item.time}/>;
         }):'加载中'}
        </div>
       </TabPane>
      </Tabs>
     </>
 );
});
