import {memo} from "react";
import {Tabs} from "antd";
import RandomBlogItem from "./RandomBlogItem";
import {useRequest} from "ahooks";
import {getHotList, getRecommendList} from "../../requests";

const {TabPane} = Tabs;


export default memo(function RandomBlog() {
  let {data = {data: []}} = useRequest(getHotList, {
    refreshDeps: []
  });
  let {data: data2 = {data: []}} = useRequest(getRecommendList, {
    refreshDeps: []
  });
  return (
      <>
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="热门文章" key="1">
            <div className={"random-blog-container"}>
              {data.data.map((item) => {
                return <RandomBlogItem post={item.post} title={item.title} views={item.views} id={item.id} key={item.id}
                                       time={item.time}/>;
              })}
            </div>
          </TabPane>
          <TabPane tab="推荐文章" key="2">
            <div className={"random-blog-container"}>
              {data2.data.map((item) => {
                return <RandomBlogItem post={item.post} title={item.title} views={item.views} id={item.id} key={item.id+'r'}
                                       time={item.time}/>;
              })}
            </div>
          </TabPane>
        </Tabs>
      </>
  );
});
