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

4. App.vue 引入外部css
```js
import 'normalize.css/normalize.css'
import './assets/reset.css'
```




