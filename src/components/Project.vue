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
                intro: '基于 Vue + Vuex + Vue-cli + webpack 搭建的在线简历编辑器'
            },
            {
                href: 'http://flysasa.top/project/1%20My-player/index.html',
                title: 'Round Icons',
                intro: 'Graphic Design'
            },
            {
                href: 'http://www.baidu.com',
                title: 'Round Icons',
                intro: 'Graphic Design'
            },
            {
                href: 'http://www.baidu.com',
                title: 'Round Icons',
                intro: 'Graphic Design'
            }
        ],
        styleObject: [
            {
                background: 'url(http://p77gvk6sn.bkt.clouddn.com/resume-editor.png) center center no-repeat',
                'background-size': 'cover'
            },
            {
                background: 'url(http://p77gvk6sn.bkt.clouddn.com/myplayer.gif) center center no-repeat',
                'background-size': 'cover'
            },
            {
                background: 'url(http://book.jirengu.com/jirengu-inc/jrg-tehui/homework/%E8%8B%A5%E6%84%9A/16/img/portfolio/roundicons.png) center center no-repeat',
                'background-size': 'cover'
            },
            {
                background: 'url(http://book.jirengu.com/jirengu-inc/jrg-tehui/homework/%E8%8B%A5%E6%84%9A/16/img/portfolio/roundicons.png) center center no-repeat',
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
                margin-bottom: 3vh;
            }
        }
    }
}
</style>

