<template>
  <section id="contact">
      <div class="title">
          <h2>{{title}}</h2>
          <p>{{intro}}</p>
      </div>
      <main>
          <div class="message">
              <h2>社交网络</h2>
              <div class="social">
                  <p>QQ: 812071523</p>
                  <P>Github: https://github.com/FLYSASA?tab=repositories</P>
                  <p>邮箱: 18565889307@163.com</p>
              </div>
          </div>       
          <figure class="wechat"></figure>       
      </main>
  </section>
</template>


<script>
export default {
  data(){
      return {
        title: '联系本人',
        intro: 'CONTACT ME',
      }
  }
}
</script>

<style lang="scss" scoped>
    #contact{
        background: #404040;
        color: #e6e6e6;
        main{
            width: 100vh;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #adadad;
            border: 1px solid;
            border-radius: 5px;
            padding: 2vh;
            .message{
                width: 60%;
                .social p{
                    margin-top: 4vh;
                }
            }
            .wechat{              
                width: 25vh;
                height: 25vh;
                background: url(../assets/wechat.png) center center no-repeat no-repeat;
                background-size: cover;
            }
        }
    }
</style>

