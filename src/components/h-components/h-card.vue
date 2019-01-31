<template>
    <div class="h-card" ref="card" :style="{'height' : height_computed}">
        <div class="card-header" flex="main:justify" ref="header">
            <div class="font-sm">
                <slot name="title"></slot>
            </div>
            <div class="sub">
                <slot name="sub-title"></slot>
            </div>
        </div>
        <div class="line"></div>
        <div class="card-content" style="overflow-y : auto;" ref="content">
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
        props: {
            height: String,
            fixeld: Boolean
        },
        filters: {},
        components: {},
        computed: {
            height_computed() {
                return this.height ? this.height + 'px' : 'auto';
            }
        },
        mounted() {
            this.$nextTick(()=>{
                if(this.fixeld){
                    this.$refs.content.style.maxHeight = (Number(this.height) - this.$refs.header.scrollHeight - 24) + 'px';
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

    .h-card {
        border .5px solid disabled;
        background-color light;

        margin 12px 12px 0 12px;

        .card-header {
            padding 12px 12px 12px 24px;
        }

        .card-content {
            padding 12px 12px 12px 24px;

            > *:not(:first-child) {
                margin-top 24px;
            }
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