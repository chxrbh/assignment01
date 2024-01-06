<template>
    <div class="frame">
        <div class="image"></div>
        <div class="div">
            <div class="overlap-group">
                <div class="rectangle"></div>
                <div class="overlap">
                    <!-- <div class="text-wrapper">submit</div> -->
                </div>
                <div class="rectangle-2"></div>
                <div class="text-wrapper-2">Hello !</div>
            </div>
            
        </div>
    </div>
</template>
  
<script>
export default {
    name: "Frame",
};
</script>
  
<style>
.frame {
    background-color: #faf4e4;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
}

.frame .div {
    background-color: #faf4e4;
    height: 1080px;
    position: relative;
}

.frame .overlap-group {
    background-size: 100% 100%;
    height: 404px;
    position: relative;
}

.frame .rectangle {
    background-color: #ffffff;
    border: 3px solid;
    border-color: #faf4e4;
    border-radius: 15px;
    height: 37px;
    position: absolute;
    top: 164px;
    width: 214px;
}

.frame .overlap {
    background-color: #fbd743;
    border-radius: 15px;
    height: 37px;
    position: absolute;
    top: 274px;
    width: 215px;
}

.frame .text-wrapper {
    color: #ffffff;
    font-family: "Poppins-Bold", Helvetica;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 5px;
    width: 75px;
}

.frame .rectangle-2 {
    background-color: #ffffff;
    border: 3px solid;
    border-color: #faf4e4;
    border-radius: 15px;
    height: 38px;
    position: relative;
    top: 219px;
    width: 214px;
}

.frame .text-wrapper-2 {
    color: #ffffff;
    font-family: "Poppins-Bold", Helvetica;
    font-size: 32px;
    font-weight: 700;
    left: 49px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 92px;
    width: 115px;
}

.frame .image {
    height: 392px;
    object-fit: cover;
    position: absolute;
    width: 352px;
    max-width: 400px;
    border-radius: 42px;
    background: #FA7A53;
    text-align: center;
}
</style>
  