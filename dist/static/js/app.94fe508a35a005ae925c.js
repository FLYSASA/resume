webpackJsonp([1],{"3Kyd":function(t,e){},"6Rbd":function(t,e){},HsPR:function(t,e){},IHvJ:function(t,e){},IyM3:function(t,e){},KmVk:function(t,e){},LzZJ:function(t,e){},MPzD:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),r=n("7t+N"),a=n.n(r),i={data:function(){return{nav:[{href:"#header",content:"关于"},{href:"#skill",content:"技能"},{href:"#project",content:"项目"},{href:"#myblog",content:"个人博客"},{href:"#contact",content:"联系方式"}],shownav:!1,current:0}},mounted:function(){window.onscroll=this.handleScroll},methods:{navClick:function(){!1===this.shownav?this.shownav=!0:this.shownav=!1},handleScroll:function(){var t=a()(window).scrollTop(),e=a()("#header").outerHeight(),n=a()("#skill").outerHeight(),s=a()("#project").outerHeight(),r=a()("#myblog").outerHeight();t<e&&(this.current=0),e<t&&(this.current=1),e+n<t&&(this.current=2),e+n+s<t&&(this.current=3),e+n+s+r<t&&(this.current=4)}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{attrs:{id:"bootstrap"}},[t._m(0),t._v(" "),n("button",{attrs:{id:"menu"},on:{click:t.navClick}},[t._v("Menu")]),t._v(" "),t.shownav?n("ul",{staticClass:"navbar1"},t._l(t.nav,function(e,s){return n("li",[n("a",{class:{active:s===t.current},attrs:{href:e.href},on:{click:function(e){t.current=s}}},[t._v(t._s(e.content))])])})):t._e(),t._v(" "),n("div",{staticClass:"navbar-container"},[n("ul",{staticClass:"navbar"},t._l(t.nav,function(e,s){return n("li",[n("a",{class:{active:s===t.current},attrs:{href:e.href}},[t._v(t._s(e.content))])])}))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{staticClass:"name-top",attrs:{href:"#header"}},[this._v("MyHOME")])])}]};var o=n("VU/8")(i,c,!1,function(t){n("6Rbd")},null,null).exports,l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"resumecard"},[n("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[t._v("个人信息")])]),t._v(" "),n("div",{staticClass:"layout"},[n("div",{staticClass:"imgct"},[n("figure")]),t._v(" "),n("div",{staticClass:"content"},[n("span",{staticClass:"tag"},[t._v(t._s(t.personal.tag))]),t._v(" "),n("h2",[t._v(t._s(t.personal.name))]),t._v(" "),n("p",[t._v(t._s(t.personal.position))]),t._v(" "),n("table",t._l(t.messages,function(e){return n("tr",t._l(e,function(s,r){return n("td",[t._v(t._s(e[r]))])}))}))])]),t._v(" "),n("footer",[n("ol",{staticClass:"social"},t._l(t.icons,function(t){return n("li",{staticClass:"social-ct"},[n("a",{attrs:{href:""+t.href,target:"_blank"}},[n("svg",{staticClass:"icon"},[n("use",{attrs:{"xlink:href":"#icon-"+t.icon}})])])])}))])]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mypdf"},[e("a",{staticClass:"btn",attrs:{href:"./static/resume.pdf",download:""}},[this._v("下载 PDF 简历")])])}]};var u={components:{Resumecard:n("VU/8")({data:function(){return{personal:{tag:"Hello",name:"聂腾飞",position:"前端开发工程师"},messages:[["年龄","25"],["所在城市","广东深圳"],["邮箱","812071523@qq.com"],["手机","185-6588-9307"]],icons:[{icon:"github",href:"https://github.com/FLYSASA"},{icon:"geren2",href:"http://www.flysasa.top"},{icon:"shujijiaocai",href:"https://www.jianshu.com/u/a54c3f82c08a"}]}}},l,!1,function(t){n("3Kyd")},null,null).exports}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("header",{attrs:{id:"header"}},[e("div",{staticClass:"ct"},[this._m(0),this._v(" "),e("Resumecard",{staticClass:"card"})],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-ct"},[e("a",{attrs:{href:"#"}},[e("figure",{staticClass:"banner"})])])}]};var h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"skill"}},[n("div",{staticClass:"title"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.intro))])]),t._v(" "),n("div",{staticClass:"skill-progress"},[n("ol",{staticClass:"chart"},t._l(t.progress,function(e){return n("li",[n("div",{staticClass:"skill"},[n("p",[t._v(t._s(e.title))]),t._v(" "),n("el-progress",{attrs:{percentage:e.percent,color:e.color,status:"exception"}})],1)])}))]),t._v(" "),n("div",{staticClass:"intro"},[n("ol",{staticClass:"cate"},t._l(t.skillIntro,function(e){return n("li",{staticClass:"content"},[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("ol",t._l(e.content,function(e,s){return n("li",[t._v(t._s(e))])}))])}))])])},staticRenderFns:[]};var _={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"project"}},[n("div",{staticClass:"title"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.intro))])]),t._v(" "),n("div",{staticClass:"pro-ct"},[n("ul",{staticClass:"ct-card"},t._l(t.card,function(e,s){return n("li",{staticClass:"card"},[n("a",{attrs:{href:e.href,target:"_blank"}},[n("div",{staticClass:"hover"},[n("svg",{staticClass:"icon"},[n("use",{attrs:{"xlink:href":"#icon-jia"}})])]),t._v(" "),n("div",{staticClass:"card-link background1",style:t.styleObject[s]})]),t._v(" "),n("div",{staticClass:"text-center-p"},[n("h4",{staticClass:"text-center-head"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"text-center-content"},[t._v(t._s(e.intro))])])])}))]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"address"},[e("a",{attrs:{href:"https://github.com/FLYSASA/project",target:"_blank"}},[this._v("项目源码地址")])])}]};var d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"myblog"}},[n("div",{staticClass:"title"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.intro))])]),t._v(" "),n("div",{staticClass:"pro-ct"},[n("ul",{staticClass:"ct-card"},t._l(t.card,function(e,s){return n("li",{staticClass:"card"},[n("a",{attrs:{href:e.href,target:"_blank"}},[n("div",{staticClass:"card-link background1",style:t.styleObject[s]})]),t._v(" "),n("div",{staticClass:"text-center-p"},[n("h4",{staticClass:"text-center-head"},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"text-center-content"},[t._v(t._s(e.intro))])])])})),t._v(" "),n("p",{staticClass:"and"},[t._v("&")])])])},staticRenderFns:[]};var p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"contact"}},[n("div",{staticClass:"title"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.intro))])]),t._v(" "),n("main",[n("div",{staticClass:"message"},[n("h2",[t._v("社交网络")]),t._v(" "),n("div",{staticClass:"social"},[n("p",[t._v("QQ: 812071523")]),t._v(" "),n("P",[t._v("Github: https://github.com/FLYSASA")]),t._v(" "),n("p",[t._v("邮箱: 18565889307@163.com")])],1)]),t._v(" "),n("figure",{staticClass:"wechat"})])])},staticRenderFns:[]};var f={data:function(){return{show:!1}},created:function(){var t=this;window.onscroll=function(){var e=a()(window).scrollTop();t.show=e>20}},methods:{gotop:function(){a()(window).scrollTop(0)}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("span",{staticClass:"gotop",on:{click:function(e){t.gotop()}}},[t._v("Gotop")]):t._e()},staticRenderFns:[]};var g={name:"App",components:{Topbar:o,Banner:n("VU/8")(u,v,!1,function(t){n("mtLU")},null,null).exports,Skill:n("VU/8")({data:function(){return{title:"技能",intro:"SKILL",progress:[{title:"HTML 5 & CSS3",percent:85,color:"#8e71c7"},{title:"JavaScript",percent:80,color:"#67c23a"},{title:"jQuery",percent:80,color:"#409eff"},{title:"Vue",percent:70,color:"#fed136"},{title:"Node.js",percent:60,color:"#8e71c7"},{title:"HTTP",percent:70,color:""}],skillIntro:[{title:"HTML/CSS",content:["能够编写语义化 HTML ,结构化的 CSS ,像素级还原设计稿,可以响应式移动端页面","熟悉并能运用 HTML 5 / CSS 3 新特性,能做出常见的动画效果,并在实践中能尝试各种新特性"]},{title:"ECMAScript (JavaScript)",content:["熟练使用 ECMAScript 进行编程,了解闭包,原型链,面向对象,作用域链等","熟悉 ES6/7 的常用语法,熟练使用面向对象,模块化的编程思想进行开发,并在实践中尝试使用设计模式"]},{title:"DOM/BOM",content:["熟悉原生 DOM 和 BOM 使用和相关标准,有前端组件开发经验","有前端组件封装经验,并能在实践中灵活应用"]},{title:"前端工程化",content:["了解 AMD/CMD 规范","使用过 WebPack 模块化解决方案","能在项目中使用 Less/Scss 等预处理工具等","熟悉 async / await / Promise,掌握常见的异步编程解决方案","了解基本的前端兼容性处理,性能优化等知识,并能在项目中加以实践"]}]}}},h,!1,function(t){n("NpFu")},null,null).exports,Project:n("VU/8")({data:function(){return{title:"项目",intro:"PROJECTS",card:[{href:"http://flysasa.top/project/3%20vue.js%E9%A1%B9%E7%9B%AE/6-vue-Resume-editor/dist/#/",title:"Resume Editor",intro:"基于 Vue + Vuex +  webpack 搭建的在线简历编辑器"},{href:"http://flysasa.top/project/1%20My-player/index.html",title:"My-MusicPlayer",intro:"使用原生 js 实现一个 音乐播放器，涉及的知识：html5 Audo API的使用、组件化思路、ajax、跨域、响应式媒体查询等。 "},{href:"http://flysasa.top/project/2%20%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%E9%A1%B9%E7%9B%AE/demo_requireJs/www/index.html",title:"Homepage",intro:"使用require js 实现一个html5主页，涉及的知识：各种组件(首屏轮播组件、回到顶部组件、瀑布流ajax获取新闻组件)封装,组件化思路、ajax、跨域、requirejs。"},{href:"http://flysasa.top/project/4%20Shopping%20Mall/index.html",title:"Shopping Mall",intro:"使用 jQuery 实现的一个商城主页,涉及的知识: 轮播、动画、Tab切换等"}],styleObject:[{background:"url(http://p77gvk6sn.bkt.clouddn.com/resume-editor.png) center center no-repeat","background-size":"cover"},{background:"url(http://p77gvk6sn.bkt.clouddn.com/20180417150956.gif) center center no-repeat","background-size":"cover"},{background:"url(http://p77gvk6sn.bkt.clouddn.com/20180417152616.gif) center center no-repeat","background-size":"cover"},{background:"url(http://p77gvk6sn.bkt.clouddn.com/20180417161952.gif) center center no-repeat","background-size":"cover"}]}}},_,!1,function(t){n("IHvJ")},"data-v-1ffbea72",null).exports,Myblog:n("VU/8")({data:function(){return{title:"个人博客",intro:"MYBLOG",card:[{href:"http://flysasa.top/",title:"Flysasa",intro:"MY BLOG"},{href:"https://www.jianshu.com/u/a54c3f82c08a",title:"JianShu",intro:"Record Knowledge"}],styleObject:[{background:"url(http://p77gvk6sn.bkt.clouddn.com/9%20%E4%B8%AA%E4%BA%BA%E4%B8%BB%E9%A1%B5%20%281%29.png) center center no-repeat","background-size":"cover"},{background:"url(http://p77gvk6sn.bkt.clouddn.com/10%20jianshu.png) center center no-repeat","background-size":"cover"}]}}},d,!1,function(t){n("IyM3")},"data-v-0422752a",null).exports,Contact:n("VU/8")({data:function(){return{title:"联系本人",intro:"CONTACT ME"}}},p,!1,function(t){n("KmVk")},"data-v-4ba80896",null).exports,Gotop:n("VU/8")(f,m,!1,function(t){n("RSo8")},null,null).exports}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Topbar"),this._v(" "),e("Banner"),this._v(" "),e("Skill"),this._v(" "),e("Project"),this._v(" "),e("Myblog"),this._v(" "),e("Contact"),this._v(" "),e("Gotop")],1)},staticRenderFns:[]};var b=n("VU/8")(g,C,!1,function(t){n("HsPR")},null,null).exports,k=n("/ocq"),w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var j=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},w,!1,function(t){n("LzZJ")},"data-v-694cd902",null).exports;s.default.use(k.a);var E=new k.a({routes:[{path:"/",name:"HelloWorld",component:j}]}),y=(n("uMhA"),n("MPzD"),n("zL8q")),M=n.n(y);n("tvR6");s.default.use(M.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:E,components:{App:b},template:"<App/>"})},NpFu:function(t,e){},RSo8:function(t,e){},mtLU:function(t,e){},tvR6:function(t,e){},uMhA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.94fe508a35a005ae925c.js.map