<template>
<div>
    <section id="bootstrap">	 
        <div class="logo"><a class="name-top" href="#header">MyHOME</a></div>
        <div class="navbar-container">
            <ul class="navbar clearfix">
                <li><a class="a" href="#about">关于</a></li>
                <li><a class="b" href="#skill">技能</a></li>
                <li><a class="c" href="#project">项目</a></li>
                <li><a class="d" href="#blog">博客</a></li>
                <li><a class="e" href="#contact">联系方式</a></li>
                <li><a class="f" href="#message">留言</a></li>
            </ul>
        </div>
    </section>
</div>
</template>


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