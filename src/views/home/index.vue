<template>
    <div flex="">
        <div>
            <h-delay-div>
                <h-card>
                    <div slot="title">
                        <span class="icon iconfont icon-website"></span>
                        网站说明
                    </div>
                    <div slot="sub-title">
                        <a href="https://github.com/hjh1126123/Jeho-Blog" target="view_window" class="cant-select"
                           data-tooltip="点击进入Github地址">
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
                        <h-label textIndent="9em" class="content">服务器架设[腾讯云服务器](centos 7, nodejs, pm2, nginx，cdn加速...)</h-label>
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
            <h-delay-div delay="400ms">
                <h-card>
                    <div slot="title">
                        <span class="icon iconfont icon-descript"></span>
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
            <h-delay-div delay="800ms">
                <h-card>
                    <div slot="title">
                        <span class="icon iconfont icon-authorize"></span>
                        转载说明
                    </div>
                    <div slot="sub-title">
                        <a class="primary copy" :data-clipboard-text="Copyright" data-tooltip="点击复制授权信息">
                            <i class="sub icon iconfont icon-copy"></i>
                        </a>
                    </div>
                    <p>欢迎各位转载分享网站内容，但请注明出处，原创不易，感谢支持.</p>
                </h-card>
            </h-delay-div>
        </div>
        <div>
            <p>你好</p>
        </div>
    </div>
</template>

<script>
    import hDelayDiv from 'h-components/h-delay-div.vue'
    import hCard from 'h-components/h-card.vue'
    import hLabel from 'h-components/h-label.vue'

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
            hLabel
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