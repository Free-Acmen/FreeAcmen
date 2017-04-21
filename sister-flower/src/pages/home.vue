<template>
    <div class='home'>
        <m-head isTitle='home' title='首页'></m-head>
        <section class='home-content'>
            <div class='swiper-container'>
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in banner">
                        <img :src="item.src" :alt="item.name">
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <!-- 如果需要滚动条 -->
                <!-- <div class="swiper-scrollbar"></div> -->
            </div>
            <div>
                <img src="../assets/images/logo.png" alt="logo">
            </div>
        </section>
    </div>
</template>

<script>
    import '../plugins/swiper'
    import mHead from '../components/header'
    import mFoot from '../components/footer'
    import banner1 from '../assets/images/banner1.jpg'
    import banner2 from '../assets/images/banner2.jpg'
    import banner3 from '../assets/images/banner3.jpg'
    import banner4 from '../assets/images/banner4.jpg'
    import banner5 from '../assets/images/banner5.jpg'

    export default{
        data(){
            return {
                banner: [
                    {name: 'imgae1', src: banner1},
                    {name: 'imgae2', src: banner2},
                    {name: 'imgae3', src: banner3},
                    {name: 'imgae4', src: banner4},
                    {name: 'imgae5', src: banner5}
                ]
            }
        },
        components: {
            mHead,
            mFoot,
        },
        created(){
            console.log(2)
        },
        beforeCreate(){
            console.log(1)
        },

        beforeMount(){
            console.log(3)
        },
        mounted(){
            console.log(4)
            this.swiper();
        },
        beforeUpdate(){
            console.log(5)
        },
        updated(){
            console.log(6)
        },
        methods: {
            swiper(){
                const swiper = new Swiper('.swiper-container', {
                    // direction: 'vertical',
                    loop: true,
                    autoplay: 3000,
                    // 如果需要分页器
                    pagination: '.swiper-pagination',
                    // 如果需要前进后退按钮
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    // 如果需要滚动条
                    // scrollbar: '.swiper-scrollbar'
                });
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import '../style/mixin';
    @import '../style/swiper.min.css';
    .home-content{
        /*background-color: #aaa;*/
        /*border:1px solid red;*/
    }
    .swiper-container{
        @include wh(100%, auto);
    }

</style>