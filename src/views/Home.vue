<template>
    <div class="parent">
        <header class="home-header">
            <div class="top">
                <h1 class="logo"><img src="../assets/img/logo.png" alt=""></h1>
                <nav>
                    <router-link :to="{name:'Home'}" class="active">网站首页</router-link>
                    <router-link :to="{name:'Soft'}">软件下载</router-link>
                    <router-link :to="{name:'Home'}">使用帮助</router-link>
                </nav>
            </div>
            <div class="content">
                <div class="left animated fadeInLeft">
                    <div></div>
                </div>
                <div class="right animated fadeInRight">
                    <h2>彩虹计划</h2>
                    <h3>值得您拥有的分析软件</h3>
                    <p>开奖快，功能丰富，永久免费，根据用户需求不断升级！ 高效、稳定、快速的彩票计划分析软件! 支持时时彩、 十一选五、PK10、福彩3D、快3、PC蛋蛋等</p>
                    <button>立即下载</button>
                </div>
            </div>
        </header>
        <main>
            <div class="box">
                <div class="title">
                    <h3>彩虹计划客户端下载</h3>
                    <p>Download the client</p>
                </div>
                <div class="inner">
                    <div class="item">
                        <div class="top"></div>
                        <h4>PC客户端</h4>
                        <p>版本号V3.4（11.7M）</p>
                        <p>更新时间:2020-02-17</p>
                        <p>适用于win7、win8、win10</p>
                    </div>
                    <div class="item">
                        <div class="top"></div>
                        <h4>网页客户端</h4>
                        <p>版本号V3.4（11.7M）</p>
                        <p>更新时间:2020-02-17</p>
                        <p>适用于win7、win8、win10</p>
                    </div>
                    <div class="item">
                        <div class="top"></div>
                        <h4>手机APP</h4>
                        <p>版本号V3.4（11.7M）</p>
                        <p>更新时间:2020-02-17</p>
                        <p>适用于win7、win8、win10</p>
                    </div>
                </div>
            </div>
            <div class="box box2">
                <div class="title">
                    <h3>完整的功能预测计划软件</h3>
                    <p>The perfect softwave</p>
                </div>
                <div class="inner">
                    <div class="item">
                        <div class="top"></div>
                        <h4>性能稳定</h4>
                        <div class="text">
                            彩虹计划技术团队创建于08年，一直专注于开发软件为主，团队拥有丰富的经验,能保证与软件稳定不卡,技术16*365时时检测软件稳定流畅性，避免因为软件不流畅导致彩民心情不美丽,打造业界最专业软件！
                        </div>
                    </div>
                    <div class="item">
                        <div class="top"></div>
                        <h4>精准预测</h4>
                        <div class="text">彩虹计划软件与綵票开奖实时同步，彩虹计划以保障彩民投资的即时性与有效性。为广大彩民提供各种杀号、选胆、任选、组选及倍投的綵票购买方案。以最小的投入博取最大的收益是我们核心的理念及突出的优点。</div>
                    </div>
                    <div class="item">
                        <div class="top"></div>
                        <h4>功能齐全</h4>
                        <div class="text">彩虹计划是一款支持电脑端,网页版,手机APP,三端数据统一,极速便携,支持重庆,腾讯,新疆,天津时时彩,北京赛车,11选5等玩法,数百位权威计划员专注綵票预测领域数十年,为广大彩民提供最贴心以及最人性的计划于服务！</div>
                    </div>
                </div>
            </div>
            <div class="box-other">
                <div class="inenr">
                    <div class="row">
                        <div class="item item1">
                            <h4>产品方案</h4>
                            <p>打造精准的趋势分析解决方案！</p>
                        </div>
                        <div class="item item2">
                            <h4>优秀团队</h4>
                            <p>专业、安全、稳定、强悍！</p>
                        </div>
                    </div>
                   <div class="row">
                       <div class="item item4">
                           <h4>服务支持</h4>
                           <p>全功能开放，永久免费！！</p>
                       </div>
                       <div class="item item4">
                           <h4>产品方案</h4>
                           <p>打造精准的趋势分析解决方案！</p>
                       </div>
                   </div>
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
    @import "../assets/css/home.less";
</style>
