<template>
    <div class="login">
        <m-head :title='title'>
            <span class="left login-slot" slot="login">login</span>
        </m-head>
        <m-form></m-form>
    </div>
</template>
<script>
    import mHead from '../components/header'
    import mForm from '../components/form'
    export default{
        data(){
            return {
                title: '登录'
            }
        },
        mounted(){

        },
        methods: {

        },
        components: {
            mHead,
            mForm
        }
    }
</script>
<style lang="scss" scoped>
    .login{
        .login-slot{
            width: 30%;
        }
    }
</style>