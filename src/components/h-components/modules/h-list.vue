<template>
    <div class="h-list">
        <div class="box child-mt-not-first-12" flex="dir:top cross:stretch">
            <div class="list-title">
                <slot name="title"></slot>
            </div>
            <div class="list-text" flex-box="1">
                <slot name="text"></slot>
            </div>
            <div class="list-text-end">
                <slot name="end"></slot>
            </div>
        </div>
        <div class="mt-12 line"></div>
    </div>
</template>

<script>
    export default {
        name: "h-list",
        data() {
            return {}
        },
        methods: {},
        props: {},
        filters: {},
        components: {},
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
    .h-list {
        .box {
            cursor pointer;
            .list-text-end {
                text-align right;
            }
        }
    }
</style>