<template>
    <div class="h-header">
        <div class="header-content">
            <div v-if="title" class="header-logo">
                <router-link to="/" @click.native="clear">
                    {{title}}
                </router-link>
            </div>
            <ul class="header-nav">
                <li v-for="(v,k) in items" :key="k">
                    <router-link :to="v.to" @click.native="clickNav(v.label)"
                                 :class="{'item' : v.label !== click_label,'header-nav-chosed' : v.label === click_label}">
                        {{v.label}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "h-header",
        data() {
            return {
                click_label: ''
            }
        },
        methods: {
            clear() {
                this.click_label = '';
            },

            clickNav(label) {
                this.click_label = label;
            }
        },
        props: {
            title: String,
            items: Array
        },
        watch: {},
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

    .h-header {
        width 100%;
        height 80px;
        background-color primary

        .header-content {
            height 100%;

            display flex;
            display -webkit-flex;

            margin auto;
            width 1200px;


            justify-content center;
            align-items center;

            color title;

            .header-logo {
                height 100%;
                position relative;
                font-size Font-LL;

                left -80px;

                display flex;
                display -webkit-flex;

                align-items center;
                -webkit-align-items center;
            }

            .header-nav {
                height 100%;
                font-size Font-L;

                li {
                    height 100%;

                    float left;

                    display flex;
                    display -webkit-flex;
                    align-items center;
                    -webkit-align-items center;

                    .item {
                        position: relative;
                    }

                    .item:before {
                        content "";
                        position absolute;
                        left 0;
                        bottom -10px;
                        height 3px;
                        width 100%;
                        background title;
                        transform scale(0);
                        transition all 0.3s;
                    }

                    .item:hover:before {
                        transform scale(1);
                    }

                    .header-nav-chosed {
                        position: relative;
                    }

                    .header-nav-chosed:before {
                        content "";
                        position absolute;
                        left 0;
                        bottom -10px;
                        height 3px;
                        width 100%;
                        background title;
                        transform scale(1);
                    }

                }

                > li:not(:first-child) {
                    margin-left 80px;
                }
            }
        }

    }
</style>