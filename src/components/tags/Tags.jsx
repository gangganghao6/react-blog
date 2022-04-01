import {memo} from 'react';
import {NavLink} from 'react-router-dom';
import {FireOutlined, PaperClipOutlined} from '@ant-design/icons';
import {Collapse} from 'antd';
import {useRequest} from 'ahooks';
import {getTags} from '../../requests/tags';

const {Panel} = Collapse;
export default memo(function Tags() {
 let {data, loading} = useRequest(getTags);
 return (
     <Collapse defaultActiveKey={[]} bordered={false}>
      <Panel header="文章分类" key="1">
       {loading ? '加载中' : data.data.data.map((item) => {
        return (
            <NavLink to={`/search?type=tags&tag=${item.text}`} key={item.id}>
             <li className={'left-sider-menu-item ant-collapse-header'}>
              <PaperClipOutlined/> {item.text}
             </li>
            </NavLink>
        );
       })}
       {}
      </Panel>
     </Collapse>
 );
});
