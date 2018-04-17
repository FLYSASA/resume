<template>
  <section id="project"  >
      <div class="title">
          <h2 >{{title}}</h2>
          <p>{{intro}}</p>
      </div>

      <div class="pro-ct">
          <ul class="ct-card">
              <li class="card" v-for="(item,i) in card">
                  <!-- 图片区域 -->
                  <a :href="item.href"  target="_blank">
                      <div class="hover">
                        <svg class="icon">
                            <use xlink:href="#icon-jia"></use>
                        </svg>
                      </div>
                      <div class="card-link background1" :style="styleObject[i]"></div>
                  </a>
                  <!-- 内容介绍 -->
                  <div class="text-center-p">
                      <h4 class="text-center-head">{{item.title}}</h4>
                      <p class="text-center-content">{{item.intro}}</p>
                  </div>
              </li>
          </ul>
      </div>

      <div class="address"><a href="https://github.com/FLYSASA/project" target="_blank">项目源码地址</a></div>
  </section>
</template>


<script>
export default {
  data(){
      return {
        title: '项目',
        intro: 'PROJECTS',
        card: [
            {
                href: 'http://flysasa.top/project/3%20vue.js%E9%A1%B9%E7%9B%AE/6-vue-Resume-editor/dist/#/',
                title: 'Resume Editor',
                intro: '基于 Vue + Vuex +  webpack 搭建的在线简历编辑器'
            },
            {
                href: 'http://flysasa.top/project/1%20My-player/index.html',
                title: 'My-MusicPlayer',
                intro: '使用原生 js 实现一个 音乐播放器，涉及的知识：html5 Audo API的使用、组件化思路、ajax、跨域、响应式媒体查询等。 '
            },
            {
                href: 'http://flysasa.top/project/2%20%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%E9%A1%B9%E7%9B%AE/demo_requireJs/www/index.html',
                title: 'Homepage',
                intro: '使用require js 实现一个html5主页，涉及的知识：各种组件(首屏轮播组件、回到顶部组件、瀑布流ajax获取新闻组件)封装,组件化思路、ajax、跨域、requirejs。'
            },
            {
                href: 'http://flysasa.top/project/4%20Shopping%20Mall/index.html',
                title: 'Shopping Mall',
                intro: '使用 jQuery 实现的一个商城主页,涉及的知识: 使用 jQuery 实现的一个商城主页,涉及的知识: 轮播、动画、Tab切换等'
            }
        ],
        styleObject: [
            {
                background: 'url(http://p77gvk6sn.bkt.clouddn.com/resume-editor.png) center center no-repeat',
                'background-size': 'cover'
            },
            {
                background: 'url(http://p77gvk6sn.bkt.clouddn.com/20180417150956.gif) center center no-repeat',
                'background-size': 'cover'
            },
            {
                background: 'url(http://p77gvk6sn.bkt.clouddn.com/20180417152616.gif) center center no-repeat',
                'background-size': 'cover'
            },
            {
                background: 'url(http://p77gvk6sn.bkt.clouddn.com/20180417161952.gif) center center no-repeat',
                'background-size': 'cover'
            }
        ]

      }
  },
}
</script>

<style lang="scss" scoped>
#project{
    background: #404040;
    .title{
        color: #e6e6e6;
    }
}
.pro-ct{
    text-align: center;
    .ct-card{      
        max-width: 110vh;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .card{
            border: 1px solid;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.19), 0 6px 20px 0 rgba(0,0,0,0.2);
            background: #fff;
            margin-bottom: 5vh;
            a{
                position: relative;
                display: block;   //设置block才能宽高撑起来
                .hover{
                    display: inline-block;   //同上需要宽高就要设置为块元素
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: rgba(254,209,54,.9);
                    transition: all ease .5s;
                    -webkit-transition: all ease .5s;
                    -moz-transition: all ease .5s;
                    opacity: 0;
                    &::before{
                        content:'';
                        height: 100%;
                        display: inline-block;
                        vertical-align: middle;   //需要与icon同时设置vertical-align: middle;才能垂直居中
                    }
                    .icon{
                        color: #fff;
                        font-size: 10vh;
                        vertical-align: middle;
                    }
                    &:hover{
                        opacity: 1;
                    }
                }
                .card-link{
                    width: 40vh;
                    height: 30vh;
                }
            }
            .text-center-head{
                width: 30vh;
                margin: 0 auto;
                color: #000;
                margin-top: 3vh;
                font-size: 25px;
                opacity: .8;
            }
            .text-center-content{
                width: 30vh;
                margin: 0 auto;
                color: #aaa;
                font-style: italic;
                padding-bottom: 2vh;
            }
        }
    }
}
.address{
    font-size: 2vh;
    text-align: center;
    text-decoration: underline;
    color: #e6e6e6;
    font-style: italic;
}
</style>

