<template>
    <div>
        <div class="descript-mine">
            <h-card>
                <h-delay-div slot="title">
                    <span class="icon iconfont icon-search"></span>
                    个人说明
                </h-delay-div>
                <h-delay-div slot="sub-title">
                    更多详情
                </h-delay-div>
                <h-delay-div>
                    <p>我能怎么办，我也很绝望啊!</p>
                    <p>我能怎么办，我也很绝望啊!</p>
                </h-delay-div>
                <h-delay-div delay="200ms">
                    <p>我能怎么办，我也很绝望啊!</p>
                </h-delay-div>
                <h-delay-div delay="400ms">
                    <p>我能怎么办，我也很绝望啊!</p>
                </h-delay-div>
            </h-card>
        </div>
    </div>
</template>

<script>
    import hDelayDiv from 'h-components/h-delay-div.vue'
    import hCard from 'h-components/h-card.vue'

    export default {
        name: "index",
        title() {
            return "主页"
        },
        data() {
            return {}
        },
        methods: {},
        props: {},
        filters: {},
        components: {
            hCard,
            hDelayDiv
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

<style lang="stylus">
    .descript-mine {
        width 400px;
    }
</style>