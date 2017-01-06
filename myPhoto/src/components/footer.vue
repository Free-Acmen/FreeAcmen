<template>
    <div class="m-footer">{{msg}}</div>
</template>

<script>
    export default{
        name:"footer",
        data:function(){
            msg:"footer"
        }
    }
</script>

<style lang="less" scoped>
    .m-footer{border:1px solid #000;}
</style>