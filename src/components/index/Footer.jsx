import "../../assets/style/Index/footer.scss";
import {memo} from "react";
import Footer from "rc-footer";
import {useRequest} from "ahooks";
import {getFooter} from "../../requests";

export default memo(function () {
  let {data = {data: []}} = useRequest(getFooter)
  if (data) {
    data.data.forEach((item) => {
      item.icon = <img src={`http://192.168.31.30:3000${item.post}`} loading={"lazy"} alt={item.post}/>
      item.items.forEach((itemx) => {
        if(itemx.url===''){
          delete itemx.url
        }
        itemx.openExternal = true;
      })
    })
  }
  const items = [
    {
      icon: <img src="http://192.168.31.30:3000/websiteImages/header.jpg" loading={"lazy"} alt={"header"}/>,
      title: "联系方式",
      items: [
        {
          title: "QQ:530394623",
          url: "tencent://message/?uin=530394623",
          description: "Pikachu",
        },
        {
          title: "Email:530394623@qq.com",
          url: "mailto:530394623@qq.com",
        },
        {
          title: "github:gangganghao6",
          description: "gangganghao6",
          url: "https://github.com/gangganghao6",
          openExternal: true,
        },
        {
          title: "WeChat:DY001628",
          description: "Bumblebee",
        },
      ],
    },
    {
      icon: <img src="http://192.168.31.30:3000/websiteImages/github-dark.png" loading={"lazy"} alt={"header"}/>,
      title: "我的作品(github)",
      items: [
        {
          title: "个人博客(新)",
          url: "https://github.com/gangganghao6/react-blog",
          openExternal: true,
        },
        {
          title: "个人博客(旧)",
          url: "https://github.com/gangganghao6/blog",
          openExternal: true,
        },
        {
          title: "挑战杯项目",
          url: "https://github.com/gangganghao6/qy",
          openExternal: true,
        },
        {
          title: "react脚手架",
          url: "https://github.com/gangganghao6/jsj",
          description: "已上传npm",
          openExternal: true,
        },
        {
          title: "Mock简化工具",
          url: "https://github.com/gangganghao6/mockUtil",
          description: "已上传npm",
          openExternal: true,
        },
      ],
    },
  ];
  return <Footer theme={"light"} columns={data.data} bottom={`Made by Pikachu - Powered by React`}/>;
});
