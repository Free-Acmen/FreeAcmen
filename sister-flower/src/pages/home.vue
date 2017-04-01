<template>
    <div class='home'>
        <head-top isTitle='home'></head-top>
        <section class='home-content'>
            <img src="../assets/images/logo.png" alt="logo">
        </section>
    </div>
</template>

<script>
    import headTop from '../components/header'
    export default{
        data(){
            return {
                
            }
        },
        components: {
            headTop
        }
    }
</script>

<style lang='scss' scoped>
    @import '../style/mixin';
    .home-content{
        background-color: #aaa;
        border:1px solid red;
        padding:0.25rem 0.5rem;  
    }

</style>