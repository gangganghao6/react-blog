import {memo} from 'react';
import {NavLink} from 'react-router-dom';
import {useRequest} from 'ahooks';
import {getTopBlog} from '../../requests/home';
import {Empty} from 'antd';

export default memo(function TopCard() {
 let {data, loading} = useRequest(getTopBlog);
 console.log(data);
 return ( 
     <NavLink to={data ? `/blog/${data.id}` : ''} className={'left-content-topcard'}>
      <div className={'left-content-topcard-img-container'} style={{textAlign: 'center'}}>
       {data ? <img
           src={data.gzipSrc}
           className={'left-content-topcard-img'}
           alt={''}
       /> : Empty.PRESENTED_IMAGE_DEFAULT}

      </div>
      <div className={'left-content-topcard-text-container'} style={{color: data ? data.color : 'black'}}>
       <div className={'left-content-topcard-text-title'}>
          <span className="left-content-topcard-top-icon" style={{marginTop: '5px'}}>
            置顶
          </span>
        {data ? data.title : ''}
       </div>
       <div className={'left-content-topcard-text-content'}>{data ? data.content : ''}</div>
      </div>
     </NavLink>
 );
});
