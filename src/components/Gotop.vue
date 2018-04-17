<template>
  <span class="gotop" v-if="show" @click="gotop()">Gotop</span>
</template>

<script>
import $ from 'jquery'
export default {
  data(){
      return {
          show: false
      }
  },
  created(){
    let _this = this
    window.onscroll = function(){    //绑定滚动事件,$(window).scrollTop()是获取滚动高度
        let scrollTop = $(window).scrollTop()
        if(scrollTop > 20){
            _this.show = true
        }else{
            _this.show = false
        } 
    }
  },
  methods: {
      gotop(){
          $(window).scrollTop(0)
      }
  }
}
</script>

<style lang="scss">
.gotop {
    color: #fff;
	width: 50px;
	padding: 15px 5px;
	border-radius: 5px;
	text-align: center;
	background: #fed136;
	position: fixed;
	right: 10vh;
	bottom: 10vh;
	cursor: pointer;
	font-weight: 600;
    &:hover{
        background-color: #f7c71b;
    }
    @media(max-width: 450px){
        width: 40px;
        font-size: 5px;
        padding: 15px 2px;
        right: 1vh;
    }
}
</style>
