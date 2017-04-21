<template>
    <form class='m-form'>
        <h5 class='title'>请填写以下信息:</h5>
        <div :class="{'active' : item.active}" v-for="(item, index) in form">
            <span @click="spanClick(item, index)">{{item.text}}</span>
            <input type="text" ref="ipt" :name="item.name" v-model="item.val" v-focus="item.focus" @focus="inputFocus(item, index)" @blur="inputBlur(item, index)">
        </div>
        <button type='button' @click='login'>登录</button>
    </form>
</template>

<script>
    // import Fetch from '../config/fetch'
    export default {
        data(){
            return {
                form:[
                    {text: "用户名", val: "", name: "account", active:false, focus:false},
                    {text: "密  码", val: "", name: "password", active:false, focus:false},
                    {text: "验证码", val: "", name: "test", active:false, focus:false}
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
            },
            login(){
                /*let data = {user: this.form.val, password: this.form.val, test: this.form.val}
                let resData = Fetch('POST', '/api/login/getAccount',data);
                console.log(data);
                return data;*/
                 // 获取已有账号密码
                this.$http.get('/api/login/getAccount')
                  .then((response) => {
                    // 响应成功回调
                    console.log(response)
                    let params = {
                      account : this.form[0].val,
                      password : this.form[1].val,
                      test : this.form[2].val
                    };
                    // 创建一个账号密码
                    return this.$http.post('/api/login/createAccount',params);
                  })
                  .then((response) => {
                    console.log(response)
                  })
                  .catch((reject) => {
                    console.log(reject)
                  });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../style/mixin';
    .m-form{
        background-color:#fff;
        padding:.5rem;
        .title{
            // text-align:center;
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