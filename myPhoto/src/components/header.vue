<template>
    <div class="m-header">{{msg}}</div>
</template>
<script>
    export default{
        data: function(){
            return {
                msg: 'header'
            }
        }
    }
</script>

<style scoped>
    .m-header{background:#ccc;border:1px solid red;}
</style>