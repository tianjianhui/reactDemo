# 前端自学组件示例项目
### 项目介绍
- 技术栈 React（使用React官方脚手架）
- Ant Design 组件库（按需加载）
- 代码高亮插件 highlight.js [使用请参考此链接](https://blog.csdn.net/qq_36754767/article/details/100582036)
- 展示页面分为两部分，左侧演示demo，右侧demo介绍和code展示
- 脚手架的webpack配置
1. node_modules>react-scripts>config 找到此文件夹修改里面的相关文件 （还可以用npm run eject把配置文件暴露出来,此操作不可逆）
2. 创建.env文件可以在里面设置端口和环境变量
3. 使用react-app-rewired，安装这个工具后，在项目根目录中新建文件config-overrides.js文件
---
### 项目结构介绍
**以下皆为src文件夹里的内容**
|文件夹|注解|
|---|---|
|assets|图片资源|
|components|组件|
|pages|页面|
|router|路由|
|service.js|封装接口(axios)|
|services|接口文件|

