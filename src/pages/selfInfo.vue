<template>
    <div class="bg-image">
        <div class="box">
            <div class="job">前端工程师</div>
            <div class="name"> --王雪雪</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .bg-image {
        height: 100%;
        background-image: url('../assets/images/introdudce01.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .box {
        display: flex;
        width: 100%;
        height: 80%;
        justify-content: center;
        align-items: center;
    }
    .job {
        font-size: 4em;
        color: #d93;
    }
    .name {
        font-size: 3em;
        color: #fbfbfb;
    }
</style>
