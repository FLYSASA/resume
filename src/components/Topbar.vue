<template>
<div>
    <section id="bootstrap">	 
        <div class="logo"><a class="name-top" href="#header">MyHOME</a></div>
        <!-- mobile 样式 -->
        <button id="menu" @click="navClick">Menu</button>
        <ul class="navbar1" v-if="shownav">
           <li v-for="item in nav" ><a :href="item.href" >{{item.content}}</a></li>
        </ul>

        <div class="navbar-container">          
            <ul class="navbar">
                <li v-for="item in nav"><a :href="item.href" >{{item.content}}</a></li>
            </ul>
        </div>
    </section>
</div>
</template>

<script>
import $ from 'jquery'

export default {
  data(){
      return {
          nav: [
              {href:'#header',content: '关于'},
              {href:'#skill',content: '技能'},
              {href:'#project',content: '项目'},            
              {href:'#myblog',content: '个人博客'},
              {href:'#contact',content: '联系方式'},
          ],
          shownav: false
      }
  },
 methods: {
     navClick(){
         if(this.shownav === false){
             this.shownav = true
         }else{
             this.shownav = false
         }
     },
     //html都渲染后了之后触发
     mounted(){ 
      let _this = this
      window.onscroll = _this.handleScroll  //因为window事件内this会变为window所以需要替换
      //或者window.addEventListener('scroll',_this.handleScroll)
     },
     handleScroll (){
         let bannerHeight = $('#header').outerHeight()
         let skillHeight = $('#skill').outerHeight()
         let projectHeight = $('#project').outerHeight()
         let myblogHeight = $('#myblog').outerHeight()
         let contactHeight = $('#contact').outerHeight()
         let scrollTop = $(window).scrollTop()
         
         if(scrollTop < bannerHeight){
             var $a1 = $('.navbar li:nth-child(1) a')
             $a1.addClass('active').parent('li').siblings().children('a').removeClass('active')
         }
         if(scrollTop > bannerHeight){
             var $a2 = $('.navbar li:nth-child(2) a')
             $a2.addClass('active').parent('li').siblings().children('a').removeClass('active')
         }
         if(scrollTop > bannerHeight+skillHeight){
             var $a3 = $('.navbar li:nth-child(3) a')
             $a3.addClass('active').parent('li').siblings().children('a').removeClass('active')
         }
         if(scrollTop > bannerHeight+skillHeight+projectHeight){
             var $a4 = $('.navbar li:nth-child(4) a')
             $a4.addClass('active').parent('li').siblings().children('a').removeClass('active')
         }
         if(scrollTop > bannerHeight+skillHeight+projectHeight+myblogHeight){
             var $a5 = $('.navbar li:nth-child(5) a')
             $a5.addClass('active').parent('li').siblings().children('a').removeClass('active')
         }
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
    #menu{
        position: fixed;
        right: 20px;
        top: 12px;
        background: #fed136;
        border:none;
        box-shadow: 0;
        border-radius: 5px;
        padding: 6px 3px;
        color: #fff;
    }
    .navbar1{
        margin-top: 12px; 
        display: flex;
        justify-content: space-around;
        a{
            font-size: 14px;
            color: #fff;
        }
    }            
    .navbar{
        display: none;
    }
} 
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

</style>