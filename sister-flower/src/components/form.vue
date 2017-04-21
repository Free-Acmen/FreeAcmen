<template>
    <form class='m-form'>
        <h4 class='title'>我的表单</h4>
        <div :class="{'active' : item.active}" v-for="(item, index) in form">
            <span @click="spanClick(item, index)">{{item.text}}</span>
            <input type="text" ref="ipt" v-model="item.val" v-focus="item.focus" @focus="inputFocus(item, index)" @blur="inputBlur(item, index)">
        </div>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                form:[
                    {text: "用户名", val: "", active:false, focus:false},
                    {text: "密  码", val: "", active:false, focus:false},
                    {text: "验证码", val: "", active:false, focus:false}
                ]
            }
        },
        methods: {
            spanClick(item, index){
                let id = 'ipt'+index
                item.active = true
                item.focus = true
                // this.$refs.ipt[index].focus();
            },
            inputFocus(item, index){
                item.active = true
            },
            inputBlur(item, index){
                item.focus = false
                item.val = item.val.replace(/^\s*/ig, "")
                // let val = this.$refs.ipt[index].value.replace(/^\s*/ig,"")
                // if(!val && val!=" "){
                if(!item.val){
                    item.active = false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../style/mixin';
    .m-form{
        background-color:#fff;
        padding: 0 .5rem;
        .title{
            text-align:center;
        }
        &>div{
            position:relative;
            height:2.5rem;
            margin-bottom: .3rem;
            border-bottom: 1px solid #000;
            span{
                font-size:.8rem;
                position:absolute;
                top: 1.3rem;
                left: .5rem;
                transition: all .4s linear;
                -moz-transition: all .4s linear;
                -webkit-transition: all .4s linear;
                -o-transition: all .4s linear;
            }
            &.active{
                border-bottom: 1px solid #2EAFBB;
                span{
                    font-size: .5rem;
                    top: .4rem;
                    color: #2EAFBB;
                    transition: all .4s linear;
                    -moz-transition: all .4s linear;
                    -webkit-transition: all .4s linear;
                    -o-transition: all .4s linear;
                }
            }
            input{
                @include wh(100%, 1.2rem);
                font-size:.8rem;
                width: 100%;
                margin-top: 1.2rem;
                outline:none;
                padding-left:.5rem;
            }
        }
    }
</style>