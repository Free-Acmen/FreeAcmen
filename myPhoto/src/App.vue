<template>
    <div class="g-app">
        <g-header></g-header>
        <transition :name="transtionName">
            <router-view class="child-view"></router-view>
        </transition>
        <g-footer v-show='isFooter'></g-footer>
        <g-loading v-show='isLoading'></g-loading>
    </div>
</template>

<script>
    import Header from './components/header';
    import Footer from './components/footer';
    import Loading from './components/loading';
    import Index from './pages/index';

    export default{
        name: 'app',
        data: function(){
            return {
                transtionName : 'slide-left'
            }
        },
        created: function(){
            if (this.$route.name === undefined) {
                this.$router.push('/index/hot')
            }
        },
        watch: function(){//给路由加动态效果
            '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
        },
        computed:{
            isFooter: function(){
                return this.$store.state.common.indexConf.isFooter;
            },
            isLoading:function(){
                return this.$store.state.common.isLoading;
            }
        },
        components:{
            gHeader: Header,
            gFooter: Footer,
            gLoading: Loading,
            gIndex:Index
        }
    }
</script>

<style scoped>

</style>