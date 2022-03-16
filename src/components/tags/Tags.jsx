import { memo } from "react";
import { NavLink } from "react-router-dom";
import { FireOutlined, PaperClipOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { useRequest } from "ahooks";
import { getTags } from "../../requests/tags";

const { Panel } = Collapse;
export default memo(function Tags() {
  let { data = { data: [] } } = useRequest(getTags);
  return (
    <Collapse defaultActiveKey={[]} bordered={false}>
      <Panel header="文章分类" key="1">
        {data.data.map((item) => {
          return (
            <NavLink to={`/search?type=tags&tag=${item}`}>
              <li className={"left-sider-menu-item ant-collapse-header"}>
                <PaperClipOutlined /> {item}
              </li>
            </NavLink>
          );
        })}
      </Panel>
    </Collapse>
  );
});
