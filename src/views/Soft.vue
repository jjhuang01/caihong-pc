<template>
    <div class="parent">
        <header class="home-header">
            <div class="top">
                <h1 class="logo"><img src="../assets/img/logo.png" alt=""></h1>
                <nav>
                    <router-link :to="{name:'Home'}">网站首页</router-link>
                    <router-link :to="{name:'Soft'}" class="active">软件下载</router-link>
                    <router-link :to="{name:'Home'}">使用帮助</router-link>
                </nav>
            </div>
            <div class="content">
                <div class="left animated fadeInLeft">
                    <div></div>
                </div>
                <div class="right animated fadeInRight">
                    <h2>彩虹计划是什么？</h2>
                    <p>彩虹计划软件经过多年的经验累积，众多老彩民朋友提供的思路和方法、并借鉴、融合多位业内专业用户的分析方法完成了软件所持有的运算体系:将"数据分析环境、DTS图、 号位”这些至关重要的功能始终贯穿着整个软件;独有的数据映射、遗漏分析将使您的选号不再一愁莫展;“方案参考”功能可以直接出号，让玩彩票变得更简单。在操作、界面、表现、可扩展性上都下足了功夫，力求做到尽善尽美，是一款非常难得的优秀彩票分析软件。</p>
                </div>
            </div>
        </header>
        <main>
            <div class="box">
                <div class="left">
                    <h3>彩虹软件（客户端安装版）</h3>
                    <p>当前版本号：1.6</p>
                    <p>系统支持：Win 7 / Win 8 / Win10</p>
                    <p>软件大小：12M</p>
                    <p>下载次数：99999＋ 次</p>
                    <button><a href="http://www.baidu.com/updata.zip">
                        立即下载
                    </a></button>
                </div>
                <div class="right"></div>
            </div>
            <div class="box2">
                <h3>彩虹软件客户端简介</h3>
                <div class="item">
                    <div class="inner"><div></div><strong>智能方案</strong></div>
                    <div class="inner"><div></div><strong>综合分析</strong></div>
                    <div class="inner"><div></div><strong>功能齐全</strong></div>
                    <div class="inner"><div></div><strong>智能出号</strong></div>
                </div>
            </div>
            <div class="box3">
                <div class="top">
                    软件包含智能方案、和遗漏走势等多种参考方式，多个工具间互相之间可以快速切换使用和参考，即能看各种图表走势，也可同时进行选号缩水，综合分析数据呈现，增强遗漏和冷热分析，为彩民朋友节省宝贵时间。
                </div>
                <div class="b">
                    彩虹计划客户端：支持重庆时时彩、新疆时时彩、天津时时彩，软件涵盖市面上多种辅助工具和遗漏分析系统，智能出号，参考方案等，在操作、界面、表现、可扩展性上都下足了功夫，力求做到尽善尽美，是一款非常难得的优秀彩票分析软件。
                </div>
            </div>
        </main>
        <div class="dong">
            <div class="dong1"></div>
            <div class="dong2"></div>
        </div>
        <home-bottom></home-bottom>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HomeBottom from '../../src/components/bottom.vue'

    export default {
        components: {
            HomeBottom
        },
        name: 'Home',
    }
</script>

<style scoped lang="less">
    @import "../assets/css/soft.less";
</style>
