<template>
    <p :style="{'text-indent':textIndent}">
        <slot></slot>
    </p>
</template>

<script>
    export default {
        name: "h-label",
        data() {
            return {}
        },
        methods: {},
        props: {
            textIndent : {
                type : String,
                default : '0em'
            }
        },
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

</style>