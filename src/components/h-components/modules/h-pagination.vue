<template>
    <div class="h-pagination cant-select font-sm" flex="dir:left main:justify">
        <div v-if="firstLastButton" :class="[firstPageSelected() ? 'disabled' : '']">
            <a @click="selectFirstPage()" @keyup.enter="selectFirstPage()">
                <<
            </a>
        </div>

        <div v-if="!(firstPageSelected() && hidePrevNext)"
             :class="[firstPageSelected() ? 'disabled' : '']">
            <a @click="prevPage()" @keyup.enter="prevPage()">
                <
            </a>
        </div>

        <div v-for="page in pages"
             :class="[page.selected ? 'h-pagination-selected' : '', page.disabled ? 'disabled' : '']">
            <a v-if="page.breakView">
                ......
            </a>
            <a v-else-if="page.disabled">{{ page.content }}</a>
            <a v-else @click="handlePageSelected(page.index + 1)" @keyup.enter="handlePageSelected(page.index + 1)">{{
                page.content }}</a>
        </div>

        <div v-if="!(lastPageSelected() && hidePrevNext)" :class="[lastPageSelected() ? 'disabled' : '']">
            <a @click="nextPage()" @keyup.enter="nextPage()">
                >
            </a>
        </div>

        <div v-if="firstLastButton" :class="[pageClass, lastPageSelected() ? 'disabled' : '']">
            <a @click="selectLastPage()" @keyup.enter="selectLastPage()">
                >>
            </a>
        </div>

    </div>
</template>

<script>
    export default {
        name: "h-pagination",
        props: {
            value: {
                type: Number
            },
            pageCount: {
                type: Number,
                required: true
            },
            forcePage: {
                type: Number
            },
            clickHandler: {
                type: Function,
                default: () => {
                }
            },
            pageRange: {
                type: Number,
                default: 3
            },
            marginPages: {
                type: Number,
                default: 1
            },
            firstLastButton: {
                type: Boolean,
                default: false
            },
            hidePrevNext: {
                type: Boolean,
                default: false
            }
        },
        beforeUpdate() {
            if (this.forcePage === undefined) return;
            if (this.forcePage !== this.selected) {
                this.selected = this.forcePage
            }
        },
        computed: {
            selected: {
                get: function () {
                    return this.value || this.innerValue
                },
                set: function (newValue) {
                    this.innerValue = newValue
                }
            },
            pages: function () {
                let items = {};
                if (this.pageCount <= this.pageRange) {
                    for (let index = 0; index < this.pageCount; index++) {
                        items[index] = {
                            index: index,
                            content: index + 1,
                            selected: index === (this.selected - 1)
                        }
                    }
                } else {
                    const halfPageRange = Math.floor(this.pageRange / 2);
                    let setPageItem = index => {
                        items[index] = {
                            index: index,
                            content: index + 1,
                            selected: index === (this.selected - 1)
                        }
                    };
                    let setBreakView = index => {
                        items[index] = {
                            disabled: true,
                            breakView: true
                        }
                    };
                    for (let i = 0; i < this.marginPages; i++) {
                        setPageItem(i);
                    }
                    let selectedRangeLow = 0;
                    if (this.selected - halfPageRange > 0) {
                        selectedRangeLow = this.selected - 1 - halfPageRange;
                    }
                    let selectedRangeHigh = selectedRangeLow + this.pageRange - 1;
                    if (selectedRangeHigh >= this.pageCount) {
                        selectedRangeHigh = this.pageCount - 1;
                        selectedRangeLow = selectedRangeHigh - this.pageRange + 1;
                    }
                    for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= this.pageCount - 1; i++) {
                        setPageItem(i);
                    }
                    if (selectedRangeLow > this.marginPages) {
                        setBreakView(selectedRangeLow - 1)
                    }
                    if (selectedRangeHigh + 1 < this.pageCount - this.marginPages) {
                        setBreakView(selectedRangeHigh + 1)
                    }
                    for (let i = this.pageCount - 1; i >= this.pageCount - this.marginPages; i--) {
                        setPageItem(i);
                    }
                }
                return items
            }
        },
        data() {
            return {
                innerValue: 1,
            }
        },
        methods: {
            handlePageSelected(selected) {
                if (this.selected === selected) return;
                this.innerValue = selected;
                this.$emit('input', selected);
                this.clickHandler(selected);
            },
            prevPage() {
                if (this.selected <= 1) return;
                this.handlePageSelected(this.selected - 1)
            },
            nextPage() {
                if (this.selected >= this.pageCount) return;
                this.handlePageSelected(this.selected + 1)
            },
            firstPageSelected() {
                return this.selected === 1
            },
            lastPageSelected() {
                return (this.selected === this.pageCount) || (this.pageCount === 0)
            },
            selectFirstPage() {
                if (this.selected <= 1) return;
                this.handlePageSelected(1)
            },
            selectLastPage() {
                if (this.selected >= this.pageCount) return;
                this.handlePageSelected(this.pageCount)
            }
        }
    }
</script>

<style lang="stylus">
    @import "~stylus/variable"

    .h-pagination {
        height 48px;

        align-items center;
        -webkit-align-items center;

        > * {
            a {
                -webkit-transition all 0.5s;
                -moz-transition all 0.5s;
                -ms-transition all 0.5s;
                -o-transition all 0.5s;
                transition all 0.5s;

                padding 8px;
                box-shadow 0 2px 2px 0 disabled;
            }
        }

        .h-pagination-selected {
            a {
                background-color dark-primary;
                color title;
            }
        }
    }
</style>