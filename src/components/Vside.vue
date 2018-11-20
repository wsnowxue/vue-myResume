<template>
    <div>
        <div class="zan" @click="showLayer"><img src="../assets/images/zan.jpg" alt=""></div>
        <div :class="{layer:isChange}">
            <ul>
                <li>王雪雪 15005722340 1992-03-05 wsnowxueah@163.com</li>
                <li>安徽科技学院 环境科学 全日制本科 2011.9-2015.6</li>
                <li>github：https://github.com/wsnowxue</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Vside',
    data() {
        return {
            isChange: false
        }
    },
    methods: {
        showLayer() {
            this.isChange = !this.isChange
        }
    }
}
</script>
<style>
    .zan {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        z-index: 1000;
        position: fixed;
        right: 20px;
        bottom: 100px;
        overflow: hidden;
        opacity: 0.6;
        cursor: pointer;
    }
    .zan img {
        width: 90px;
        height: 90px;
    }
    @keyframes myfirst {
        from {height: 0;opacity: 0;}
        to {height: 200px;opacity: 0.9;}
    }
    .layer {
        width: 100%;
        height: 200px;
        position: fixed;
        left: 0;
        top: 60px;
        background-color: #fafafa;
        opacity: 0.9;
        animation: myfirst 0.3s;
        text-align: center;
        padding-top: 30px;
    }
    .layer li {
        margin-top: 20px;
    }
</style>
