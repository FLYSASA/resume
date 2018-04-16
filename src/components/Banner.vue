<template>
  <div>
      <header id="header">
          <div class="ct">
            <div class="img-ct"><a href="#"><figure class="banner"></figure></a> </div>          
            <Resumecard class="card"></Resumecard>
          </div>
      </header>
  </div>
</template>

<script>
import Resumecard from './ResumeCard'
export default {
  components: {Resumecard}
}
</script>

<style lang="scss">
#header{
    position: relative;
    width: 100%;
    height: 55vh;
    .ct{ 
        width: 100%;
        height: 100%;
        overflow: auto;
        .banner{
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: url(http://p77gvk6sn.bkt.clouddn.com/laptop-3309864_1920.jpg) center center no-repeat no-repeat;
            background-size: cover;
            z-index: -1;
            &:after{
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.4);
            }
        }
        .card{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,10%);
            overflow: hidden;
        }        
    }
}
</style>

