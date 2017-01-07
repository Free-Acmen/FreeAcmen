<template>
    <div class="m-footer">{{msg}}</div>
</template>

<script>
    export default{
        data: function(){
            return {
                msg: 'footer'
            }
        }
    }
</script>

<style lang="less" scoped>
    .m-footer{border:1px solid #000;}
</style>