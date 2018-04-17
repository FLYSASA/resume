<template>
  <div class="resumecard">
    <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
            <span>个人信息</span>
        </div>
        <div class="layout">
            <div class="imgct"><figure></figure></div>
            <div class="content">
                <span class="tag">{{personal.tag}}</span>
                <h2>{{personal.name}}</h2>
                <p>{{personal.position}}</p>
                <table>
                    <tr v-for="message in messages">
                        <td v-for="(item,i) in message">{{message[i]}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <footer>
            <ol class="social">
                <li v-for="item in icons" class="social-ct">
                    <a :href="`${item.href}`" target="_blank">
                        <svg class="icon">
                            <use :xlink:href="`#icon-${item.icon}`"></use>                     
                        </svg>
                    </a>
                </li>
            </ol>
        </footer>
    </el-card>
    <div class="mypdf">
        <a class="btn" href="../../static/resume.pdf" download="" >下载 PDF 简历</a>
    </div> 
  </div>
</template>

<script>
export default {
    data(){
        return {
            personal : {
                tag: 'Hello',
                name:'聂腾飞',
                position: '前端开发工程师',
            },
            messages: [
                ['年龄','25'],
                ['所在城市','广东深圳'],
                ['邮箱','812071523@qq.com'],
                ['手机','185-6588-9307']
            ],
            icons: [
                {icon:'github',href:'https://github.com/FLYSASA' },
                {icon:'geren2',href:'http://www.flysasa.top'},
                {icon:'shujijiaocai',href:'https://www.jianshu.com/u/a54c3f82c08a'}
            ]
        }
        
    }
}
</script>

<style lang="scss">
//ele组件样式
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

//自定义card样式
  .box-card {
    width: 100vh;
    position: relative;
    @media(max-width: 450px){
        width: 55vh;
    }
    .layout{
        width: 100%;
        height: 40vh;
        display: flex;
        @media(max-width: 450px){
        }
        .imgct{
            width: 35%;
            flex-shrink: 0;   //不被压扁
            figure{
                width: 20vh;
                height: 20vh;
                border: 1px solid #eee;
                border-radius: 50%;
                background: url(http://p77gvk6sn.bkt.clouddn.com/my-avatar.jpg) center center no-repeat no-repeat;
                background-size: cover; 
                @media(max-width: 450px){
                    width: 15vh;
                    height: 15vh;
                }
            }
        }
        .content{
            height: 80%;
            flex: 1;  
            .tag{
                padding: 5px;
                background: #fed136;
                border-radius: 5px;
                color: #fff;
            }
            h2{
                margin-top: 2vh;
            }
            p{
                margin-top: 1vh;
                font-weight: 800;
                padding: 0vh 4vh 2vh 0;
                border-bottom: 1px solid #eee;
            }
            table{
                margin-top: 2vh;
                font-size: 1.6vh;
                tr{
                    td{
                        padding-bottom: 2vh;
                    }
                    td:first-child{
                        font-weight: 800;
                        padding-right: 10vh;
                        @media(max-width: 450px){
                            padding-right: 2vh;
                         }
                    }
                    
                }              
            }
        }
    }
    footer{
        width: 100%;
        height: 12%;
        background: #fed136;
        position: absolute;
        bottom:  0;
        left: 0;       
        .social{
            margin: 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            color: #fff;
            justify-content: space-between;
            align-items: center;
            font-size: 4vh;
            .social-ct:hover{
                cursor: pointer;
                color: #000;
            }
        }
    }
  }
  .mypdf{
      text-align: center;
      margin-top: 3vh;
      a {
          display: inline-block;
          padding: 1.5vh 1.5vh;
          border-radius: 2px; 
          background: #fed136;
          color: #fff;
          &:hover{
              background: #fac60a;
          }       
      }
  }
</style>

