<template>
    <div id="app">
        <header class="header">
            <nav class="inner">
                <router-link to="/" exact>Home</router-link>
                <router-link to="/web">Web</router-link>
                <router-link to="/desktop">Desktop</router-link>
                <router-link to="/server">Server</router-link>
                <router-link to="/unity">unity</router-link>
            </nav>
        </header>
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<style lang="stylus">
    @import "~styles/reset.styl"

    .fade-enter-active, .fade-leave-active {
        transition all .2s ease
    }

    .fade-enter, .fade-leave-active {
        opacity 0
    }
</style>
