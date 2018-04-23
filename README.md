# resume homepage 制作流程

### 1.前期准备工作
  vue-cli脚手架搭建
```
npm install vue-cli --save   //进入项目目录安装vue-cli
vue init webpack .     //vue初始化文件
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

4. **main.js** 引入外部css
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
```npm install jquery --save```
这步后面可能提示安装`npm install element-ui` 安装就好了
2. 修改配置文件两处地方

![1](https://i.loli.net/2018/04/17/5ad550204b64c.png)

第一处:

![2](https://i.loli.net/2018/04/17/5ad55211dca67.png)

第二处:

![3](https://i.loli.net/2018/04/17/5ad552e0d09d1.png)

3. 直接在需要的组件上引用

![4](https://i.loli.net/2018/04/17/5ad553695127b.png)

### vue 的点击事件怎么获取当前点击的元素
首先 vue的点击事件 是用  @click = “clickfun()” 属性 在html中绑定的
在点击的函数中 添加$event 参数就可以

比如: 
```html
<button  @click = “clickfun($event)”>点击</button>
methods: {
    clickfun(e) {
       // e.target 是你当前点击的元素
       // e.currentTarget 是你绑定事件的元素
    }
}
```

### 解决本地css url图片显示正常,放在githubpage无法显示的bug: 
步骤: 
1. 在 `config/index.js` 中修改 `assetsPublicPath` 为 `./`
2. 在 `build/utils.js` 中的 `ExtractTextPlugin.extract` 传入参数 `publicPath: '../../'`

重新build上传

完美解决本地和服务器上资源url解析的问题

参考: https://my.oschina.net/u/1778998/blog/1609856


<hr>

### 具体的页面构建:
- #### 导航栏
1. 导航栏布局: 
pc: 两栏布局
mobile: 上下布局
媒体查询写样式的时候,首先考虑mobile first

针对不同的设备,pc和手机写两套不同的html 和 css.

- mobile端: 
页面结构:
```
section
    -----.logo
    |
    -----#menu
    |
    -----.navbar1(是个ul)
          |  
           ---a (被li包裹)
```
section的样式:
`position: fixed,width: 100%;z-index: 1`初步确定nav位置.
**z-index只有在位置position设定后才生效**

.logo的样式:
`margin-left: 20px;等等`

#menu的样式:
去除button的默认样式: `border: 0;`
`position: fixed`

.navbar1的样式:
`margin-top: 12px; diaplay: flex; justify-content: space-around;`

.navbar1 a的样式: 
`设置color font-size`以及`&.active时的样式`

- pc端
页面结构:
```
section
    -----.logo
    |
    -----.navbar1(是个ul)
          |  
           ---a (被li包裹)
```
没有menu-button,

布局:
主要是当
```css
@media(min-width: 451px){   
    #bootstrap {     
        display: flex;
        justify-content: space-between;
        align-items: center; 
        #menu{
            display: none;
        }   
        .navbar1{
            display: none;
        }         
        .navbar {
            display: flex;
            width: 650px;
            justify-content: space-around;
            a{
                display: block;
                color: #fff;
                padding: 10px;
                font-size: 16px;
                font-weight: 300;
                &.active{
                    color: #fed136;
                    border-bottom: 4px solid #fed136;
                }
                &:hover{
                    color: #fed136;
                }
            }
         }
    }
}
```

**手机设备最大屏宽不会超过450px**

所以媒体查询主要思路是: 写两套html和css
当宽度大于450px时,mobile的样式设置为display: none;


### 关于导航js交互
1. mobile html
给button设置点击事件 `@click=`





