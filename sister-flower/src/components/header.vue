<template>
    <header id='head-top' class="clear">
        <slot name='login'></slot>
        <router-link to='/hello' v-if='isTitle' class='left m-head-left'>To hello</router-link>
        <section class='m-head-content left'>
            {{title}}
        </section>
        <div class='right m-head-right'>
            <router-link to= "/login">
                <span class='icon-user'></span>
            </router-link>
            <span class='icon-th-list'></span>
        </div>
    </header>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        props: ['isTitle', 'title'],
        computed: function(){

        }
    }
</script>

<style lang='scss' scoped>
    @import '../style/mixin';
    @import '../style/icon';
    #head-top{
        display: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        background-color: $blue;
        padding:0 .5rem;
        line-height:2.5rem;
        @include wh(100%, 2.5rem);
            .m-head-left{
                @include wh(30%, 100%);
            }
            .m-head-content{
                @include wh(40%, 100%);
                text-align:center;
            }
            .m-head-right{
                @include wh(30%, 100%);
                text-align:right;
                span{
                    color:#fff;
                }
            }
    }
</style>