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
                <ul class='mouseMoveUl -center'>
                    <li>
                        <div class='w'>
                        <div class='f'>
                            <svg viewBox='0 0 180 180'>
                            <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../assets/mouseMove/img/i-angus.png'></image>
                            </svg>
                        </div>
                        <div class='b'>
                            <h3>
                            Angus Young
                            </h3>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div class='w'>
                        <div class='f'>
                            <svg viewBox='0 0 180 180'>
                            <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../assets/mouseMove/img/i-aurora.png'></image>
                            </svg>
                        </div>
                        <div class='b'>
                            <h3>
                            Aurora
                            </h3>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div class='w'>
                        <div class='f'>
                            <svg viewBox='0 0 180 180'>
                            <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../assets/mouseMove/img/i-bride.png'></image>
                            </svg>
                        </div>
                        <div class='b'>
                            <h3>
                            Bride of Frankenstein
                            </h3>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div class='w'>
                        <div class='f'>
                            <svg viewBox='0 0 180 180'>
                            <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../assets/mouseMove/img/i-d.png'></image>
                            </svg>
                        </div>
                        <div class='b'>
                            <h3>
                            Dracula
                            </h3>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div class='w'>
                        <div class='f'>
                            <svg viewBox='0 0 180 180'>
                            <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../assets/mouseMove/img/i-dali.png'></image>
                            </svg>
                        </div>
                        <div class='b'>
                            <h3>
                            Salvador Dalí
                            </h3>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div class='w'>
                        <div class='f'>
                            <svg viewBox='0 0 180 180'>
                            <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../assets/mouseMove/img/i-huitzi.png'></image>
                            </svg>
                        </div>
                        <div class='b'>
                            <h3>
                            Ilhuicatl Xoxouhqui
                            </h3>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div class='w'>
                        <div class='f'>
                            <svg viewBox='0 0 180 180'>
                            <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../assets/mouseMove/img/i-man.png'></image>
                            </svg>
                        </div>
                        <div class='b'>
                            <h3>
                            L'Homme qui rit
                            </h3>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div class='w'>
                        <div class='f'>
                            <svg viewBox='0 0 180 180'>
                            <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../assets/mouseMove/img/i-v.png'></image>
                            </svg>
                        </div>
                        <div class='b'>
                            <h3>
                            Visualization
                            </h3>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div class='w'>
                        <div class='f'>
                            <svg viewBox='0 0 180 180'>
                            <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../assets/mouseMove/img/i-v2.png'></image>
                            </svg>
                        </div>
                        <div class='b'>
                            <h3>
                            Visualization II
                            </h3>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div class='w'>
                        <div class='f'>
                            <svg viewBox='0 0 180 180'>
                            <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../assets/mouseMove/img/i-v3.png'></image>
                            </svg>
                        </div>
                        <div class='b'>
                            <h3>
                            Visualization III
                            </h3>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div class='w'>
                        <div class='f'>
                            <svg viewBox='0 0 180 180'>
                            <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../assets/mouseMove/img/i-worms.png'></image>
                            </svg>
                        </div>
                        <div class='b'>
                            <h3>
                            Zombie
                            </h3>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div class='w'>
                        <div class='f'>
                            <svg viewBox='0 0 180 180'>
                            <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlink:href='../assets/mouseMove/img/i-xrays.png'></image>
                            </svg>
                        </div>
                        <div class='b'>
                            <h3>
                            X-Rays
                            </h3>
                        </div>
                        </div>
                    </li>
                </ul>
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
            var mm = require('../assets/mouseMove/js/index.d.js')
            $('#dowebok').fullpage({
                sectionsColor: ['#cba994', '#7BAABE']
            });
            this.getCanvas()
            new mm.default(document.querySelectorAll('.mouseMoveUl li'))
        }
  }
</script>
<style>
    @import url(../assets/fullPage/css/jquery.fullPage.css);
    @import url(../assets/mouseMove/css/style.css);
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


