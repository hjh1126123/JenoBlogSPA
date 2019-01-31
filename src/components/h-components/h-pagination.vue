<template>
    <div class="h-pagination cant-select" flex="dir:left">
        <div class="pagination-icon" flex="dir:left">
            <<
        </div>
        <div class="pagination-index ml-12" flex="dir:left">
            <span :ref="`page${i}`" v-for="(i,k) in tmpItems" :key="k"
                  v-on:click="clickPage(i)">
                {{i + 1}}
            </span>
        </div>
        <div class="pagination-icon ml-12" flex="dir:left">
            >>
        </div>
    </div>
</template>

<script>
    export default {
        name: "h-pagination",
        data() {
            return {
                items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                tmpItems: [],
                chosedIndex: 0,
                nowChoseItems: null,
                tmpMaxLenght: 0
            }
        },
        methods: {
            clickPage(index) {
                if(index < 0)
                    return;

                this.chosedIndex = index;

                if (this.nowChoseItems) {
                    this.nowChoseItems.className = '';
                }

                this.nowChoseItems = this.$refs[`page${index}`][0];
                this.nowChoseItems.className = 'item-chosed';


                if (index === this.tmpMaxLenght - 1) {
                    this.tmpMaxLenght++;
                } else if (index === this.tmpMaxLenght - this.maxLength && this.tmpMaxLenght !== this.maxLength) {
                    this.tmpMaxLenght--;
                }
            }
        },
        props: {
            defaultPage: {
                type: Number,
                default: 0
            },
            hidePage: {
                type: Boolean,
                default: true
            },
            maxLength: {
                type: Number,
                default: 10
            }
        },
        filters: {},
        components: {},
        computed: {},
        watch: {
            tmpMaxLenght(val) {
                if (val !== 0) {
                    this.tmpItems = [];
                    for (let i = val - this.maxLength; i < val; i++) {
                        this.tmpItems.push(this.items[i]);
                    }
                    this.clickPage(this.chosedIndex - 1);
                }
            }
        },
        mounted() {
            for (let i = 0; i < this.maxLength; i++) {
                this.tmpItems.push(this.items[i]);
            }
            this.tmpMaxLenght = this.maxLength;

            this.$nextTick(() => {
                this.clickPage(this.defaultPage);
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

    .h-pagination {
        padding 16px;
        justify-content center;
        -webkit-justify-content center;

        .pagination-icon {
            cursor pointer;
            box-shadow 0 2px 2px 0 disabled;

            align-items center;
            -webkit-align-items center;
            justify-content center;
            -webkit-justify-content center;
        }
        .pagination-index {
            height 100%;
            align-items center;
            -webkit-align-items center;
            justify-content center;
            -webkit-justify-content center;
            span {
                cursor pointer;
                padding 8px;
                box-shadow 0 2px 2px 0 disabled;
                -webkit-transition all 0.5s;
                -moz-transition all 0.5s;
                -ms-transition all 0.5s;
                -o-transition all 0.5s;
                transition all 0.5s;
            }

            > span:not(:first-child) {
                margin-left 16px;
            }
        }
    }

    .item-chosed {
        color title;
        border .5px solid sub-primary;
        background-color dark-primary;
    }
</style>