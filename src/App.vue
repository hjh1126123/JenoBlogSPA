<template>
    <div id="app">

        <h-header title="Jeho博客" :items="items"></h-header>

        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<script>
    import hHeader from 'h-components/h-header.vue'

    export default {
        name: "app",
        data() {
            return {
                items: [
                    {
                        to: '/web',
                        label: 'Web',
                        describe: 'web端应用(css,html,js,vue...) '
                    },
                    {
                        to: '/desktop',
                        label: 'Desktop',
                        describe: '桌面端应用(winform,wpf...)'
                    },
                    {
                        to: '/server',
                        label: 'Server',
                        describe: '服务器应用(webapi,wcf,socket...)'
                    },
                    {
                        to: '/unity',
                        label: 'unity',
                        describe: 'unity当然就是unity游戏引擎相关内容啦...'
                    }
                ]
            }
        },
        methods: {},
        props: {},
        filters: {},
        components: {
            hHeader
        },
        computed: {},
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
</style>
