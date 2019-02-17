<template>
    <div id="app">
        <h-header title="Jeho博客" :items="items"></h-header>
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>

        <div class="center-in-page">
            <transition name="fade" mode="out-in">
                <h-loading v-if="loadding"></h-loading>
            </transition>
        </div>


    </div>
</template>

<script>
    export default {
        name: "app",
        data() {
            return {
                items: [
                    {
                        to: '/type/web',
                        label: 'Web',
                        describe: 'web端应用(css,html,js,vue...) '
                    },
                    {
                        to: '/type/desktop',
                        label: 'Desktop',
                        describe: '桌面端应用(winform,wpf...)'
                    },
                    {
                        to: '/type/server',
                        label: 'Server',
                        describe: '服务器应用(webapi,wcf,socket...)'
                    },
                    {
                        to: '/type/unity',
                        label: 'unity',
                        describe: 'unity当然就是unity游戏引擎相关内容啦...'
                    }
                ]
            }
        },
        methods: {},
        props: {},
        filters: {},
        components: {},
        computed: {
            loadding() {
                return this.$store.state.loadding
            }
        },
        mounted() {
            this.$nextTick(() => {
                if (ClipboardJS) {
                    new ClipboardJS('.copy');
                } else {
                    console.error('复制组件失效');
                }
            });
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

<style lang="stylus">
    @import "~stylus/variable"
    @import "~stylus/variable-class"

    body {
        background-color background;
    }

    .fade-enter-active, .fade-leave-active {
        transition all .2s ease
    }

    .fade-enter, .fade-leave-active {
        opacity 0
    }

    .view {
        width 1200px;
        margin-left auto;
        margin-right auto;
    }

    .center-in-page {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
</style>
