<template>
    <div class="h-delay-div">
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
                type: String,
                default: 'left'
            },
            noCenter: Boolean,
            width: {
                type: String,
                default: '100%'
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

    .h-delay-div {
        width 100%;

        .aninode {
            visibility hidden;
        }
    }

    .h-delay-div .aninode {
        visibility visible;
    }

    .h-delay-div .topIn {
        animation topIn 1s ease;
    }

    .h-delay-div .leftIn {
        animation-name leftIn;
        animation-duration 1s;
    }

    @keyframes topIn {
        from {
            transform translateY(-20px)
            opacity 0;
        }
        to {
            transform translateY(0px)
            opacity 1;
        }
    }

    @keyframes leftIn {
        from {
            transform translateX(-20px);
            opacity 0;
        }
        to {
            transform translateX(0px);
            opacity 1;
        }
    }
</style>