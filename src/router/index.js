import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import projectExcp from '../pages/projectExcp.vue' 
import selfEval from '../pages/selfEval.vue' 
import selfInfo from '../pages/selfInfo.vue' 
import skills from '../pages/skills.vue' 
import workExcp from '../pages/workExcp.vue' 

// 告诉vue使用vueRouter
Vue.use(VueRouter);
const routes = [
    // 重定向
    {
        path: '/',
        redirect: '/selfInfo'
    },
    {
        path: '/projectExcp',
        component: projectExcp
    },
    {
        path: '/selfEval',
        component: selfEval
    },
    {
        path: '/selfInfo',
        component: selfInfo
    },
    {
        path: '/skills',
        component: skills
    },
    {
        path: '/workExcp',
        component: workExcp
    }
]

var router = new VueRouter({routes})
export default router;