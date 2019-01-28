<template>
    <div class="h-card" ref="card">
        <div class="card-header">
            <div class="main">
                <slot name="title"></slot>
                <slot name="sub-title"></slot>
            </div>
        </div>
        <div class="card-split line"></div>
        <div class="card-content">
            <slot></slot>
        </div>
    </div>
</template>


<script>
    export default {
        name: "h-card",
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
    @import "~styles/theme.styl"

    .h-card {
        border .5px solid disabled;
        background-color white;

        margin 12px;


        .card-header {
            padding 12px 12px 12px 24px;

            .main {
                font-weight bold
            }

            .sub {
                font-size Font-S;
                color primary;
            }
        }

        .card-split {

        }

        .card-content {
            padding 12px 12px 12px 24px;
        }

        -webkit-transition all 0.5s;
        -moz-transition all 0.5s;
        -ms-transition all 0.5s;
        -o-transition all 0.5s;
        transition all 0.5s;
    }

    .h-card:hover {
        box-shadow 1px 2px 2px 2px disabled;
    }
</style>