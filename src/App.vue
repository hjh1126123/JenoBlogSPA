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
        name: "header",
        data() {
            return {
                items : [
                    {
                        to : '/web',
                        label : 'Web'
                    },
                    {
                        to : '/desktop',
                        label : 'Desktop'
                    },
                    {
                        to : '/server',
                        label : 'Server'
                    },
                    {
                        to : '/unity',
                        label : 'unity'
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
    @import "~styles/reset.styl"

    .fade-enter-active, .fade-leave-active {
        transition all .2s ease
    }

    .fade-enter, .fade-leave-active {
        opacity 0
    }
</style>
