<template>
    <div>
        <p>{{msg}}</p>
        <router-link :to="{name:'home'}">home</router-link>
    </div>
</template>
<script>
    export default{
        data: function (){
            return {
                msg: 'index'
            }
        }
    }
</script>

<style scoped>

</style>