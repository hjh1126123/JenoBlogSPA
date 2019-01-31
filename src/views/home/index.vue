import title from "../../util/title";
<template>
    <div flex="main:justify box:mean">
        <div>
            <h-delay-div>
                <h-card>
                    <div slot="title">
                        <span class="icon iconfont icon-website" style="font-weight: unset;"></span>
                        网站说明
                    </div>
                    <div slot="sub-title">
                        <a href="https://github.com/hjh1126123/Jeho-Blog" target="view_window" class="cant-select"
                           tooltip="项目源码" flow="left">
                            <i class="sub iconfont icon-github"></i>
                        </a>
                    </div>
                    <div class="child-mt-not-first-6">
                        <p>该网站已在Github上开源，以供大家交流学习</p>
                    </div>
                    <div class="child-mt-not-first-6">
                        <p>并且会在博客内更新该博客网站从零开始到上线部署的所有过程</p>
                        <p>它包括以下知识点：</p>
                        <h-label textIndent="9em" class="content">前端开发(vue ssr, webpack, stylus...)</h-label>
                        <h-label textIndent="9em" class="content">后端开发(net core, webapi, docker...)</h-label>
                        <h-label textIndent="9em" class="content">服务器架设[腾讯云服务器](centos 7, nodejs, pm2, nginx，cdn加速...)
                        </h-label>
                        <h-label textIndent="9em" class="content">数据库部署[阿里云数据库](数据表设计)</h-label>
                    </div>
                    <div class="child-mt-not-first-12">
                        <p>可能有人会问，为什么服务器和数据库不是出自同一家公司?</p>
                        <p>让我来回答你吧，对于我这种穷人来说，肯定是哪边便宜买哪边罗</p>
                        <p>然后，在我...</p>
                        <p>刚好想玩服务器的时候，腾讯云打折</p>
                        <p>刚好想玩数据库的时候，阿里云打折</p>
                        <p>所以俩边的市场大佬，多打打折呗 (*^~^*)</p>
                    </div>
                </h-card>
            </h-delay-div>
            <h-delay-div delay="300ms">
                <h-card>
                    <div slot="title">
                        <span class="icon iconfont icon-describe"></span>
                        内容说明
                    </div>
                    <div class="child-mt-not-first-6">
                        <p>网站所有内容诺没署名，均为原创</p>
                    </div>
                    <div class="child-mt-not-first-6">
                        <p>因为水平有限，诺是有我说错的地方（或者仅仅只是怀疑我说错了），都可以在评论区指出 :)</p>
                        <p>我会去进行验证和仔细查阅相关资料来尽量确认文章的准确性</p>
                    </div>
                </h-card>
            </h-delay-div>
            <h-delay-div delay="600ms">
                <h-card>
                    <div slot="title">
                        <span class="icon iconfont icon-authorize"></span>
                        转载说明
                    </div>
                    <div slot="sub-title">
                        <a class="primary copy" :data-clipboard-text="Copyright" tooltip="复制授权信息" flow="left">
                            <i class="sub icon iconfont icon-copy"></i>
                        </a>
                    </div>
                    <p>欢迎各位转载分享网站内容，但请注明出处，原创不易，感谢支持.</p>
                </h-card>
            </h-delay-div>
            <h-delay-div delay="900ms">
                <h-card>
                    <div slot="title">
                        <span class="icon iconfont icon-user"></span>
                        关于
                    </div>
                    <div class="child-mt-not-first-6">
                        <p>个人简介:</p>
                        <h-label textIndent="5em" class="content">喜爱的技术: Vue, Net Core, WPF, WebApi, Unity</h-label>
                        <h-label textIndent="5em" class="content">喜爱的游戏: LOL, Far cry 5, OW</h-label>
                        <h-label textIndent="5em" class="content">编程外特长: 低等级的钢琴,很菜的编曲(老实说，我很想在这方面精进一下)</h-label>
                        <h-label textIndent="5em" class="content">不擅长的事: 能言善辩，画画，唱歌，做饭...</h-label>
                    </div>
                    <div class="child-mt-not-first-12">
                        <p>联系方式:</p>
                        <p>
                            <i class="sub font-m iconfont icon-qq"></i>
                            <span class="sub font-m ml-6">945664458</span>
                        </p>
                        <p>
                            <i class="sub font-m iconfont icon-email"></i>
                            <span class="sub font-m ml-6">945664458@qq.com</span>
                        </p>
                    </div>
                </h-card>
            </h-delay-div>
        </div>
        <div>
            <h-card height="359" fixeld>
                <div slot="title">
                    最新文章
                </div>
                <h-list>
                    <span class="content font-l" slot="title">我是标题</span>
                    <p class="content" slot="text">文章内容是:.......................</p>
                    <div slot="end">
                        <p>
                            <span class="sub">Jeho</span>
                            <span class="sub ml-12">2019-01-31 15:07</span>
                        </p>
                        <p class="mt-6">
                            <span class="error">阅读量</span>(1000)
                            <span class="primary">评论</span>(1000)
                            <span class="sub iconfont icon-goodjob"></span>(500)
                        </p>
                    </div>
                </h-list>
                <h-pagination></h-pagination>
            </h-card>
            <h-card>
                <div slot="title">
                    最新评论
                </div>
                <h-list>
                    <div slot="title">
                        <span class="content font-sm" slot="title">文章：我是标题</span>
                    </div>
                    <span class="sub font-s" slot="text">你这有问题啊??哪里是这么说的？？dwadaw </span>
                    <div slot="end">
                        <p>
                            <span class="sub">hjh</span>
                            <span class="sub ml-12">2019-01-31 15:07</span>
                        </p>
                        <p class="mt-6">
                            <span class="primary">回复</span>(1000)
                        </p>
                    </div>
                </h-list>
            </h-card>
        </div>
    </div>
</template>

<script>
    import hDelayDiv from 'h-components/h-delay-div.vue'
    import hCard from 'h-components/h-card.vue'
    import hLabel from 'h-components/h-label.vue'
    import hList from 'h-components/h-list.vue'
    import hPagination from 'h-components/h-pagination.vue'

    export default {
        name: "index",
        title() {
            return "主页"
        },
        data() {
            return {
                Copyright: '该文转载至<a href="http://www.gamebyhjh.com/">Jeho的个人网站</a>' +
                '\r\n' +
                '------' +
                '\r\n' +
                '研究课题：vue，unity，桌面应用，服务器'
            }
        },
        methods: {},
        props: {},
        filters: {},
        components: {
            hCard,
            hDelayDiv,
            hLabel,
            hList,
            hPagination
        },
        computed: {},
        mounted() {
        },
        beforeDestroy() {
        },
        beforeCreate() {
        },
        created() {
        },
        beforeMount() {
        },
        beforeUpdate() {
        },
        updated() {
        },
        destroyed() {
        }
    }
</script>

<style lang="stylus" scoped>

</style>