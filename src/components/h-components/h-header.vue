<template>
    <div class="h-header">
        <div class="header-content">
            <div v-if="title" class="header-logo">
                <router-link to="/" @click.native="clear" class="cant-select">
                    {{title}}
                </router-link>
            </div>
            <ul class="header-nav">
                <li v-for="(v,k) in items" :key="k">
                    <router-link :to="v.to" @click.native="clickNav(v.label)"
                                 :class="{'item' : v.label !== click_label,'header-nav-chosed' : v.label === click_label}"
                                 class="cant-select">
                        {{v.label}}
                    </router-link>
                </li>
            </ul>
            <form class="header-serach">
                <div class="icon-content">
                    <span class="icon iconfont icon-search"></span>
                </div>
                <div class="search-content">
                    <input type="search" placeholder="搜索 博文&日志" class="serach"/>
                </div>
            </form>
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
    @import "~stylus/variable"

    .h-header {
        width 100%;
        height 80px;
        background-color primary

        a:link {
            color title;
        }

        a:visited {
            color title;
        }

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

                font-size Font-LL;

                position relative;
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

            .header-serach {
                position relative;
                right -80px;

                display: table;
                width: 51px;

                .icon-content {
                    position: relative;
                    height: 50px;
                    width: 50px;

                    z-index: 2;

                    background-color: sub-primary;

                    display: table-cell;
                    text-align: center;
                    vertical-align: middle;
                }

                .search-content {
                    position absolute;
                    top 0;
                    left 0;
                    z-index 1;

                    input.serach {
                        -webkit-transition all 0.5s;
                        -moz-transition all 0.5s;
                        -ms-transition all 0.5s;
                        -o-transition all 0.5s;
                        transition all 0.5s;

                        padding 0;
                        height 50px;
                        width 50px;

                        border none;
                        outline none;

                        &:focus {
                            border none;
                            outline none;

                            padding-left 60px;
                            padding-right 10px;
                            width 300px;
                        }
                    }
                }

                &:hover > .search-content input.serach {
                    border none;
                    outline none;
                    padding-left: 60px;
                    padding-right: 10px;
                    width: 300px;
                }
            }
        }

    }
</style>