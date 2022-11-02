<script setup>
    
</script>

<template>
    <div class="wrap">
        <div class="nav">
            <div class="icon">
                <div class="icon-img"><img src="../assets/1.jpeg" alt=""></div>
                <div class="icon-con">
                    <p>GoodDay</p>
                    <h2>Valli.Dom</h2>
                </div>
            </div>

            <div class="btn">
                <div class="btn-item">
                    1
                    <font-awesome-icon icon="HatWizard" />
                </div>
                <div class="btn-item">2</div>
                <div class="btn-item">3</div>
                <div class="btn-item">4</div>
                <div class="btn-item">5</div>
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
    height: 400px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin-left: 25px;
    margin-top: 25px;
    color: aqua;
}

.btn-item{
    color: #fff;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.icon{
    width: 250px;
    height: 60px;
    margin-left: 25px;
    margin-top: 20px;
    display: flex;
    
}

.icon-img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.6);
    overflow: hidden;
}

.icon-img img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}

</style>
