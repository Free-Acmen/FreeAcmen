<template>
    <header id='head-top'>
        <slot name='logo'></slot>
        <router-link to='/hello' v-if='isTitle'>hello</router-link>
        <section class='head-title'>
            {{title}}
        </section>
        <section>{{isTitle}}</section>
    </header>
</template>

<script>
    export default {
        data(){
            return {
                title: '首页'
            }
        },
        props: ['isTitle'],
        computed: function(){

        }
    }
</script>

<style lang='scss' scoped>
    @import '../style/mixin';
    #head-top{
        display: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        background-color: $blue;
        @include wh(100%, 2.5rem);
    }
</style>