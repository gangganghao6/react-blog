import { memo } from "react";
import { Tabs } from "antd";
import RandomBlogItem from "./RandomBlogItem";
import { useRequest } from "ahooks";
import { getHotList } from "../../requests";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default memo(function RandomBlog() {
  let { data = { data: [] } } = useRequest(getHotList);
  return (
    <>
      <Tabs defaultActiveKey="1" onChange={callback} centered>
        <TabPane tab="热门文章" key="1">
          <div className={"random-blog-container"}>
            {data.data.map((item) => {
              return <RandomBlogItem post={item.post} title={item.title} views={item.views} id={item.id} />;
            })}
          </div>
        </TabPane>
        <TabPane tab="热门文章" key="2">
          <div className={"random-blog-container"}>
            <RandomBlogItem />
          </div>
        </TabPane>
      </Tabs>
    </>
  );
});
