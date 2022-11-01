<script setup>

</script>

<template>
    <div class="wrap">
        <div class="nav">
            <div class="btn">
                <div class="btn-item"></div>
                <div class="btn-item"></div>
                <div class="btn-item"></div>
            </div>
            <div class="icon">
                <div class="icon-img"><img src="../assets/1.jpeg" alt=""></div>
                <div class="icon-con">
                    <p>GoodDay</p>
                    <h2>Valli.Dom</h2>
                </div>
            </div>
            <div class="line"></div>
            <div class="title"></div>

        </div>
    </div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.6);
}
.wrap{
    width: 100%;
    height: 100%;
    background-color: brown;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav{
    overflow: hidden;
    height: 820px;
    width: 280px;
    background-color: rgba(0,0,0,0.8);
    border-radius: 20px;
    transition: 0.5s;
}
/* .nav:hover{
    width: 280px;
} */
.btn{
    width: 60px;
    height: 10px;
    display: flex;
}

</style>
