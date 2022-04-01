import {memo} from 'react';
import '../../assets/style/Blog/blogContent.scss';
import {Light as SyntaxHighlighter} from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import json from 'react-syntax-highlighter/dist/cjs/languages/hljs/json';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/hljs/markdown';
import rust from 'react-syntax-highlighter/dist/cjs/languages/hljs/rust';
import java from 'react-syntax-highlighter/dist/cjs/languages/hljs/java';
import atomOneDark from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {FieldTimeOutlined} from '@ant-design/icons';
import {Image} from 'antd';
import dayjs from 'dayjs';
import {parseTime} from '../../utils/timeFormat';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('rust', rust);
SyntaxHighlighter.registerLanguage('java', java);
const components = {
 code({node, inline, className, children, ...props}) {
  const match = /language-(\w+)/.exec(className || 'language-js');
  return (
      <SyntaxHighlighter
          style={atomOneDark}
          customStyle={{}}
          showLineNumbers={true}
          language={match[1]}
          PreTag="div"
          children={children}
          {...props}
      />
  );
 },
 td({children}) {
  return <td style={{borderLeft: '1px solid black', borderRight: '1px solid black'}}>{children}</td>;
 },
 tr({children, ...props}) {
  return <tr style={{borderTop: '1px solid black', borderBottom: '1px solid black'}}>{children}</tr>;
 },
 th({children, style, ...props}) {
  return <th style={{borderLeft: '1px solid black', borderRight: '1px solid black', ...style}}>{children}</th>;
 },
 img({...props}) {
  let splits = props.src.split('/');
  splits[splits.length - 1] = `gzip_${splits[splits.length - 1]}`;
  let all = splits.join('/');
  return (
      <div style={{overflow: 'hidden'}}>
       <Image
           style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
           }}
           src={all}
           alt={props.alt}
           preview={{
            src: props.src,
           }}
       />
      </div>
  );
 },
 h1({...props}) {
  return <h1 style={{fontWeight: 700}}>{props.children}</h1>;
 },
};
export default memo(function Blog({content, lastModified}) {
 return (
     <div className={'blog-content'}>
      <ReactMarkdown children={content} components={components} remarkPlugins={[remarkGfm]}/>
      <div className={'blog-content-lastModified'}>
       <FieldTimeOutlined/> 最后编辑于：{parseTime(lastModified)}
      </div>
     </div>
 );
});
