# mblog个人博客项目

组长：董宇

组员：刘明、郑欣瑜、张钰海

## 运行方式

1. 分别将三个项目git clone到本地，安装依赖

   ```
   项目一（前台）：https://github.com/gangganghao6/react-blog
   项目二（后台）：https://github.com/gangganghao6/react-blog-backstage
   项目三：（后端服务）：https://github.com/gangganghao6/react-blog-server
   执行yarn命令安装依赖
   ```

   

2. 项目一：

   ```
   由于某些原因，您需要在src目录下的main.jsx中将wndow.url更改为您的电脑的内网地址，注意端口号为8082，因为我们的服务器默认运行于8082端口，若需要修改服务器的端口号，则应同时修改window.url以及vite.config.js中的port端口号
   执行yarn run dev即可开启服务器，默认运行在8081端口号
   ```

3. 项目二：

   ```
   执行yarn run dev即可开启服务器，默认运行在8081端口号
   ```

4. 项目三：

   ```js
   在开启服务器前，您需要前往localConfig.json配置您的静态目录和内网地址
   请严格按照以下格式配置
   {
     "publicPath": "D:\\blog\\blogserve\\public",
     "url": "http://192.168.31.30:8082/"
   }
   配置完成后执行node server.js即刻开启服务器，服务器默认运行在8082端口号
   ```
   
5. 博客前台项目的地址为http://[您的内网地址]:[前端端口号]

   博客后台项目的地址为http://[您的内网地址]:[前端端口号]/backstage

   > 注意，数据统一存在db.json中，若db.json原有内容未删除，可能会出现前台页面有博客文章但图片无法显示的情况，这是由于静态图片为同步git的原因，您可以通过后台管理页面直接删除并重新发布博客文章即可，或者直接从db.json删除相应文章（不推荐）

## 博客介绍

1. 前台功能包括：博客文章分页查看，搜索，评论，分类，相册的分页查看，支持markdown语法，评论，时间线，github项目展示，博客基本信息的统计显示。文章支持查看点击次数，评论数量等。评论支持层中楼的回复方式，回复指定评论用户

2. 后台功能包括博客文章及相册的增删改查，支持实时编辑markdown文本，所见即所得。支持时间线，标签的增删，支持页脚链接的通过json编辑器定制，支持图表显示（开发中）
3. 后端基于jsonserver进行了文件上传以及路由拓展，支持pm2的启动方式