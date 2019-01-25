<template>
    <div class="container animated">
        <div class="aninode">
            <div :class="{'leftIn' : animation === 'left','topIn': animation === 'top'}"
                 :style="{'animation-delay' : delay ? delay : '0ms'}" style="animation-fill-mode: backwards!important;">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "h-delay-div",
        data() {
            return {}
        },
        methods: {},
        props: {
            delay: String,
            animation: {
                type : String,
                default : 'left'
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

    .container {
        width: 200px;
        margin: 0 auto;
    }

    .aninode {
        visibility: hidden;
    }

    .animated .aninode {
        visibility: visible;
    }

    .animated .topIn {
        animation: topIn 1s ease;
    }

    .animated .leftIn {
        animation-name: leftIn;
        animation-duration: 1s;
    }

    @keyframes topIn {
        from {
            transform: translateY(-20px)
            opacity: 0;
        }
        to {
            transform: translateY(0px)
            opacity: 1;
        }
    }

    @keyframes leftIn {
        from {
            transform: translateX(-20px);
            opacity: 0;
        }
        to {
            transform: translateX(0px);
            opacity: 1;
        }
    }
</style>