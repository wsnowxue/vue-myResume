<template>
    <div>
        <ul class="nav">
            <li v-for="(item,index) in navList" :key="index" :class="{navActive:activeChange(index)}" @click="addFocus(index)">
            <router-link :to="item.href">{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Vheader',
    data() {
        return {
            navList: [
                {href:'/projectExcp',title:'项目经验',name:'projectExcp'},
                {href:'/selfEval',title:'自我评价',name:'selfEval'},
                {href:'/selfInfo',title:'自我介绍',name:'selfInfo'},
                {href:'/skills',title:'专业技能',name:'skills'},
                {href:'/workExcp',title:'工作经历',name:'workExcp'},
            ],
            numFocus: 0
        }
    },
    methods: {
        addFocus(num) {
            this.numFocus = num
        },
        activeChange(num) {
            if(num == this.numFocus) {
                return true
            }
            return false
        }
    }
}
</script>
<style>
    .nav {
        display: flex;
        height: 60px;
        justify-content: flex-end;
        align-items: center;
        background-color: #333;
    }
    .nav a {
        color: #fbfbfb;
    }
    .nav >li {
        padding: 0 10px;
        height: 60px;
        line-height: 60px;
        color: #fff;
    }
    .navActive {
        background-color: #d93;
    }
</style>


