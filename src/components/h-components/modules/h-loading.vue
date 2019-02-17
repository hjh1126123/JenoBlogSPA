<template>
    <div class="h-loading">
        <div class="ball-holder">
            <div class="ball"></div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "h-loading",
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
    @import "~stylus/variable"

    @keyframes loadingE {
        0% {
            transform rotate(0deg);
        }
        100% {
            transform rotate(360deg);
        }
    }

    .h-loading {
        position relative;
        width 45px;
        height 45px;
        margin 0 auto;
        border 4px solid primary;
        border-radius 100%;
        animation loadingE 1.3s linear infinite;

        .ball-holder {
            position absolute;
            width 12px;
            height 45px;
            left 17px;
            top 0;

            .ball {
                position absolute;
                top -11px;
                left 0;
                width 16px;
                height 16px;
                border-radius 100%;
                background dark-primary;
            }
        }
    }


</style>