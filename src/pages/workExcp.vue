<template>
    <div>
        <div id="dowebok">
            <div class="section section1">
                <div class="container">
                    <ul class="left-side">
                        <li class="deg-1"></li>
                        <li class="deg-2"></li>
                        <li class="deg0"></li>
                        <li class="deg1"></li>
                        <li class="deg2"></li>
                        <li class="deg3"></li>
                    </ul>
                    <ul class="right-side">
                        <li><h2>浙江车国网络科技有限公司 2018.5-今</h2></li>
                        <li>1、负责KPI绩效考核系统的前端开发工作，该项目基于vue+ElementUI。</li>
                        <li>2、负责维护和开发车国车贷贷前/贷后/管理后台的常规迭代。</li>
                        <li>3、负责车国app内嵌H5页面制作和对接。</li>
                        <li>4、根据模块需求提取和优化公用代码块。</li>
                        <li>5、学习微信小程序</li>
                    </ul>
                </div>
            </div>
            <div class="section section2">
                <div class="container">
                    <div class="img-side"></div>
                    <ul class="right-side">
                        <li><h2>杭州健海科技有限公司 2016.2-2018.5</h2></li>
                        <li>1、参与需求评审/产品宣讲/UI评审/测试用例评审。</li>
                        <li>2、负责制作静态页面/js动效/浏览器兼容/前后端对接/联调测试/测试bug修复。</li>
                        <li>3、公用代码(css/js)维护，插件适配。</li>
                        <li>4、医院在用的现场各类问题协助解决以及代码版本版本维护。</li>
                        <li>5、同期利用业余时间学习ES6及VUE。</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import '../assets/fullPage/js/jquery.fullPage.d.js'
export default {
    mounted() {
	    $('#dowebok').fullpage();
    }
}
</script>
<style>
    .section1 { background: url(../assets/fullPage/images/4.jpg) 50%;}
    .section2 { background: url(../assets/fullPage/images/1.jpg) 50%;}
    .container {
        display: flex;
        justify-content: space-around;
    }
    .container >ul {
        width: 600px;
        height: 500px;
        position: relative;
    }
    .container >ul.left-side >li {
        width: 600px;
        height: 500px;
        background-color: #3997e4;
        position: absolute;
    }
    .container >ul.left-side >li:hover {
        z-index: 100;
    }
    .deg-1 {
        transform: rotate(-10deg);
        background-image: url(../assets/images/cg1.png);
    }
    .deg-2 {
        transform: rotate(-20deg);
        background-image: url(../assets/images/cg2.png);
    }
    .deg0 {
        transform: rotate(0deg);
        background-image: url(../assets/images/cg3.jpg);
    }
    .deg1 {
        transform: rotate(10deg);
        background-image: url(../assets/images/cg6.jpg);
    }
    .deg2 {
        transform: rotate(20deg);
        background-image: url(../assets/images/cg5.jpg);
    }
    .deg3 {
        transform: rotate(30deg);
        background-image: url(../assets/images/cg4.jpg);
    }
    ul.right-side >li {
        margin-top: 20px;
    }
    ul.right-side >li:first-child {
        margin-top: 160px;
    }
    .img-side {
        width: 600px;
        height: 480px;
        background-image: url(../assets/images/ex.png);
    }
</style>
