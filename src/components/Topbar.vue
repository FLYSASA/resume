<template>
<div>
    <section id="bootstrap">	 
        <div class="logo"><a class="name-top" href="#header">MyHOME</a></div>
        <div class="navbar-container">
            <ul class="navbar clearfix">
                <li v-for="item in nav"><a :href="item.href">{{item.content}}</a></li>
            </ul>
        </div>
    </section>
</div>
</template>

<script>
export default {
  data(){
      return {
          nav: [
              {href:'#header',content: '关于'},
              {href:'#project',content: '项目'},
              {href:'#myblog',content: '个人博客'},
              {href:'#contact',content: '联系方式'},
          ]
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
            &:hover{
                color: #fed136;
            }
        }
    }
}
</style>