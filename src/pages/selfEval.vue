<template>
    <div>
        <div id="container"></div>
    </div>
</template>
<script>
    export default {
        methods: {
            getMap(){
                // AMap是高德地图的构造函数，这里.Map是创建地图，.Marker是创建坐标点
                let mapObj = new AMap.Map('container', {//'container'是对应页面盒子的id
                    resizeEnable: true, //自适应大小
                    zoom: 12,//初始视窗
                    center: [120.129369, 30.284935],//中心点
                });
                let marker = new AMap.Marker({
                        map: mapObj,
                        position: new AMap.LngLat('120.123169', '30.278895'), //此处根据页面数据可以直接传入经纬度进行描点
                        title: '华星公寓'
                })
            }
            
        },
        mounted() {
            this.getMap();
        }
    }
</script>
<style>
    @import url('http://cache.amap.com/lbs/static/main1119.css');
</style>
