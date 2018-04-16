<template>
  <section id="myblog">
      <div class="title">
          <h2>{{title}}</h2>
          <p>{{intro}}</p>
      </div>
       <div class="pro-ct">
          <ul class="ct-card">
              <li class="card" v-for="(item,i) in card">
                  <!-- 图片区域 -->
                  <a :href="item.href"  target="_blank">
                      <div class="card-link background1" :style="styleObject[i]"></div>
                  </a>
                  <!-- 内容介绍 -->
                  <div class="text-center-p">
                      <h4 class="text-center-head">{{item.title}}</h4>
                      <p class="text-center-content">{{item.intro}}</p>
                  </div>
              </li>
          </ul>
          <p class="and">&</p>
      </div>
  </section>
</template>

<script>
export default {
  data(){
      return {
        title: '个人博客',
        intro: 'MYBLOG',
        card: [
            {
                href: 'http://www.baidu.com',
                title: 'Flysasa',
                intro: 'MY BLOG'
            },
            {
                href: 'http://www.baidu.com',
                title: 'JianShu',
                intro: 'Record Knowledge'
            }
        ],
        styleObject: [
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
  }
}
</script>

<style lang="scss" scoped>
.pro-ct{
    text-align: center;
    position: relative;
    .and{
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 5vh;
    }
    .ct-card{
        max-width: 110vh;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .card{
            border: 1px solid rgb(158, 158, 158);    
            border-radius: 10px; 
            overflow: hidden;   
            background: #fff;
            margin-bottom: 5vh;
            &:hover{
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.19), 0 6px 20px 0 rgba(0,0,0,0.2);
            }
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
                    width: 30vh;
                    height: 25vh;
                }
            }
            .text-center-head{
                color: #000;
                margin-top: 3vh;
                font-size: 25px;
                opacity: .8;
            }
            .text-center-content{
                color: #aaa;
                font-style: italic;
                margin-bottom: 3vh;
            }
        }
    }
}
</style>


