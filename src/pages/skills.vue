<template>
    <div>
        <div id="dowebok">
            <div class="section">
                <ul>
                    <li v-for="(item,index) in options" :key="index">
                        <div :id="item.id"></div>
                    </li>
                </ul>
            </div>
            <div class="section">
                <h3>主要涉及PC端的后台管理项目和绩效考核项目</h3>
                <p class="skill">主要的技术有:HTML5+CSS3+JAVASCRIPT+AJAX,vue+elementUI框架</p>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery'
    import '../assets/fullPage/js/jquery.fullPage.d.js'
    export default {
        data() {
            return {
                options: [
                    {id: 'technology1',skill: 'HTML5+CSS3',Percentage: '80%',describe: '熟练使用盒模型的布局,实现静态DOM树的搭建'},
                    {id: 'technology2',skill: 'HTML5+CSS3',Percentage: '80%',describe: '熟练使用盒模型的布局,实现静态DOM树的搭建'},
                    {id: 'technology3',skill: 'HTML5+CSS3',Percentage: '80%',describe: '熟练使用盒模型的布局,实现静态DOM树的搭建'},
                    {id: 'technology4',skill: 'HTML5+CSS3',Percentage: '80%',describe: '熟练使用盒模型的布局,实现静态DOM树的搭建'}
                ]
            }
        },
        methods: {
            getCanvas() {
                // this.options.forEach(item=>{
                //     let cav = $("#technology1")
                //     console.log(cav)
                //     cav.width = 150
                //     cav.height = 150
                //     let ctx = cav.getContext('2d')
                    
                //     ctx.lineWidth = 10;
                //     ctx.font = '3em bold SimHei';
                //     ctx.textBaseline = 'top';
                //     var deg = 0;
                //     var timer = setInterval(function(){
                //         ctx.clearRect(0,0,242,150);
                //         // 外部灰色外圈
                //         ctx.beginPath();
                //         ctx.arc(75,75,70,0,2*Math.PI);
                //         ctx.strokeStyle = '#aaa';
                //         ctx.stroke();
                //         //绘制进度条
                //         ctx.beginPath();
                //         deg += 4;
                //         ctx.arc(75,75,70, 0-Math.PI/2, deg*Math.PI/180-Math.PI/2);
                //         ctx.strokeStyle = '#D38629';
                //         ctx.stroke();
                //         //绘制文本信息
                //         var txt = parseInt(deg/360*100)+'%';
                //         var w = ctx.measureText(txt).width;
                //         ctx.fillStyle = '#D38629';
                //         ctx.fillText(txt, 75-w/2, 75-20);
                //         if(deg>=num*360/100){
                //             clearInterval(timer);
                //             timer=null;
                //             deg=0;
                //             console.log(deg);
                //         }
                //     },10)
                // })
            }
        },
        mounted() {
            $('#dowebok').fullpage({
                sectionsColor: ['#cba994', '#7BAABE']
            });
            this.getCanvas()
        }
  }
</script>
<style>
    @import url(../assets/fullPage/css/jquery.fullPage.css);
    .section {
        text-align: center;
    }
    .skill {
        margin-top: 30px;
    }
    .project-duty >li {
        margin-top: 20px;
    }
</style>


