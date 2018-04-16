<template>
    <section id="skill">
        <div class="title">
          <h2>{{title}}</h2>
          <p>{{intro}}</p>
        </div>
        <div class="skill-progress">
            <ol class="chart">
                <li v-for="item in progress">
                    <div class="skill">
                        <p>{{item.title}}</p>
                        <el-progress :percentage="item.percent" :color="item.color" status="exception"></el-progress>
                    </div>
                </li>
            </ol>                      
        </div>
        <div class="intro">
            <ol class="cate">
                <li class="content" v-for="item in skillIntro">
                <h3>{{item.title}}</h3>
                <ol>
                    <li v-for="(cont,i) in item.content">{{cont}}</li>
                </ol>
                </li>
            </ol>
            </div>
    </section>
</template>

<script>
export default {
  data(){
      return {
        title: '技能',
        intro: 'SKILL',
        progress: [
            {title:'HTML 5 & CSS3',percent:85,color: '#8e71c7'},
            {title:'JavaScript',percent:80,color: '#67c23a'},
            {title:'jQuery',percent:80,color: '#409eff'},
            {title:'Vue',percent:70,color: '#fed136'},
            {title:'Node.js',percent:60,color: '#8e71c7'},
            {title:'HTTP',percent:70,color: ''}
        ],
        skillIntro: [
            {title: 'HTML/CSS',content: [
                '能够编写语义化 HTML ,结构化的 CSS ,像素级还原设计稿,可以响应式移动端页面',
                '熟悉并能运用 HTML 5 / CSS 3 新特性,能做出常见的动画效果,并在实践中能尝试各种新特性'
            ]},
            {title: 'ECMAScript (JavaScript)',content: [
                '熟练使用 ECMAScript 进行编程,了解闭包,原型链,面向对象,作用域链等',
                '熟悉 ES6/7 的常用语法,熟练使用面向对象,模块化的编程思想进行开发,并在实践中尝试使用设计模式'
            ]},
            {title: 'DOM/BOM',content: [
                '熟悉原生 DOM 和 BOM 使用和相关标准,有前端组件开发经验',
                '有前端组件封装经验,并能在实践中灵活应用'
            ]},
            {title: '前端工程化',content: [
                '了解 AMD/CMD 规范',
                '使用过 WebPack 模块化解决方案',
                '能在项目中使用 Less/Scss 等预处理工具等',
                '熟悉 async / await / Promise,掌握常见的异步编程解决方案',
                '了解基本的前端兼容性处理,性能优化等知识,并能在项目中加以实践'
            ]}        
        ]
      }
  }
}
</script>

<style lang="scss">
#skill{
    margin-top: 45vh;
    background: #eee;
    .skill-progress{
        border-radius: 2px;
        background: #fff;
        width: 50%;
        height: 50vh;
        margin: 0 auto;
        margin-bottom: 5vh;
        padding: 1vh;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.19), 0 6px 20px 0 rgba(0,0,0,0.2);
        .chart{
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            li{
                width: 30vh;
            }
        }
    }
    .intro{
        width: 50%;
        margin: 0 auto;
 
        .cate{
            .content{
                margin-top: 5vh;
                ol {
                    padding: 2vh;
                    li{
                        list-style: disc;
                    }
                }             
            }
        }
    }
}
</style>

