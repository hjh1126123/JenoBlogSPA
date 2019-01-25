<template>
    <div>
        <h-card>
            <h-delay-div>
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

</style>