<template>
    <div>
        <div id="dowebok">
            <div class="section">
                <h3>主要涉及PC端的后台管理项目和绩效考核项目</h3>
                <p class="skill">主要的技术有:HTML5+CSS3+JAVASCRIPT+AJAX,vue+elementUI框架</p>
            </div>
            <div class="section">
                <div class="slide">
                    <h2>KPI绩效考核系统</h2>
                    <ul class="project-duty">
                        <li>1. KPI绩效考核从零搭建前后端分离项目</li>
                        <li>2.  采用vue作为框架，elementUI作为组件库</li>
                        <li>3. 使用路由（router），状态管理（vuex），axios</li>
                        <li>4. 负责项目前期环境搭建和配置，公共组件提取，页面功能开发，迭代</li>
                    </ul>
                </div>
                <div class="slide">
                    <h2>车贷业务管理系统</h2>
                    <ul class="project-duty">
                        <li>1. KPI绩效考核从零搭建前后端分离项目</li>
                        <li>2.  采用vue作为框架，elementUI作为组件库</li>
                        <li>3. 使用路由（router），状态管理（vuex），axios</li>
                        <li>4. 负责项目前期环境搭建和配置，公共组件提取，页面功能开发，迭代</li>
                    </ul>
                </div>
                <div class="slide">
                    <h2>云随访客户关系管理系统</h2>
                    <ul class="project-duty">
                        <li>1. KPI绩效考核从零搭建前后端分离项目</li>
                        <li>2.  采用vue作为框架，elementUI作为组件库</li>
                        <li>3. 使用路由（router），状态管理（vuex），axios</li>
                        <li>4. 负责项目前期环境搭建和配置，公共组件提取，页面功能开发，迭代</li>
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
        data() {
            return {
                options: {
                paddingTop: '60px'
                },
            }
        },
        mounted() {
            $('#dowebok').fullpage({
                sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90']
            });
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


