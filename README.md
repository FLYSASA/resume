# resume homepage 制作流程

### 1.前期准备工作
  vue-cli脚手架搭建
```
npm install vue-cli --save
vue init webpack .     //初始化文件
npm run dev            //启动页面
```

### 2. 构建页面
1. App.vue主页面布局
新建一个Topbar标签,并引入Topbar组件
```html
<template>
    <div id="app">
        <Topbar></Topbar>
    </div>
</template>

<script>
import Topbar from './components/Topbar'
export default {
    name: 'App',
    components: {Topbar}
}
<script>    
```

2. 初始化css
下载normalize.css
```
npm install normalize --save    //确保在每个浏览器上默认样式一致
```
3. 在assets下新建reset.css
```css
*{margin:0;padding:0;box-sizing: border-box}
*::after, *::before{box-sizing:border-box;}
```

4. main.js 引入外部css
```js
import 'normalize.css/normalize.css'
import './assets/reset.css'
```

5. 下载scss
```
npm install --save sass-loader node-sass
```

6. 引入eleme组件
`npm i element-ui -s`
在main.js中(新建Vue实例的地方)引入:
```js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
```



### 引入jQuery
1. 安装jQuery依赖:
```npm install jQuery --save```
2. 修改配置文件两处地方

![1](https://i.loli.net/2018/04/17/5ad550204b64c.png)

第一处:

![2](https://i.loli.net/2018/04/17/5ad55211dca67.png)

第二处:

![3](https://i.loli.net/2018/04/17/5ad552e0d09d1.png)

3. 直接在需要的组件上引用

![4](https://i.loli.net/2018/04/17/5ad553695127b.png)



