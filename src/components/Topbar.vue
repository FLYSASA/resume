<template>
<div>
    <section id="bootstrap">	 
        <div class="logo"><a class="name-top" href="#header">MyHOME</a></div>
        <div class="navbar-container">
            <ul class="navbar clearfix">
                <li v-for="item in nav"><a :href="item.href" :class="{active: handleScroll === true}">{{item.content}}</a></li>
            </ul>
        </div>
    </section>
</div>
</template>

<script>
import $ from 'jquery'

export default {
  created(){
      let _this = this
      window.onscroll = _this.handleScroll
      //或者window.addEventListener('scroll',_this.handleScroll)
  },
  data(){
      return {
          nav: [
              {href:'#header',content: '关于'},
              {href:'#project',content: '项目'},
              {href:'#skill',content: '技能'},
              {href:'#myblog',content: '个人博客'},
              {href:'#contact',content: '联系方式'},
          ]
      }
  },
 methods: {
     handleScroll (){
         let bannerHeight = document.querySelector('header')
         console.log(bannerHeight)
     }
 }
}
</script>

<style lang="scss">
#bootstrap {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 800;
    background: #000;
    opacity: .8;
    z-index: 1;
    .logo{
        margin-left: 20px;
        .name-top{
            color: #fed136;
            font-style: italic;
            font-family: "Kaushan Script","Helvetica Neue",Helvetica,Arial;
            font-size: 2.5em; 
            line-height: 1;
            opacity: 1;      
            &:hover{
                opacity: .8;
            }
        }
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
</style>