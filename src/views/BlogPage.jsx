import {memo, useEffect, useState} from 'react';
import {useNavigate, useLocation, useParams} from 'react-router-dom';
import BlogTitle from '../components/blog/BlogTitle';
import Content from '../components/blog/BlogContent';
import Comments from '../components/Comments';
import store from '../reducer/resso';
import {useRequest} from 'ahooks';
import {getBlogDetail} from '../requests/blog';
import {parseTime} from '../utils/timeFormat';

export default memo(function Blog({id = undefined}) {
 const {siderHide, setSiderHide, refresh} = store;
 const params = useParams();
 if (id === undefined) {
  id = params.id;
 }
 let {data, loading} = useRequest(getBlogDetail(id), {
  refreshDeps: [refresh, id],
 });
 let total = 0;
 let view = 0, comments = [], time = 0, title = '', content = '', lastModified = 0, tag = '';
 if (data) {
  ({view = 0, comments = [], time = 0, title = '', content = '', lastModified = 0, tag = ''} = data.data.data);
  total += comments.length;
  comments.forEach((item) => {
   total += item.innerComments.length;
  });
 }

 useEffect(() => {
  if (!siderHide) {
   setSiderHide();
  }
  window.scrollTo(0, 0);
 }, [id]);
 return (
     <>
      <BlogTitle
          msg={{
           title,
           time: parseTime(time),
           lastModified: parseTime(lastModified),
           view,
           comments: total,
           words: content.length,
           tag,
          }}
      />
      <Content content={content} lastModified={lastModified}/>
      <Comments comments={comments} id={id} type={'blogs'}/>
     </>
 );
});
