<template>
  <transition disableScrolling="false" name="fade">
    <div v-if="show" class="preloader">
      <div class="logo">
        <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
      </div>
      <!-- <p>CIao sono un loader, almeno credo</p> -->
      <h1 class="animate__animated animate__lightSpeedInLeft logo_name mb-5">
        Domenico Galileo
      </h1>
      <div class="wrapper">
        <div class="bar">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import "animate.css";
export default {
  name: "PreLoader",
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
      }, 4000);
    },
  },
};
</script>

<style lang="scss" scoped>
.animate__animated.animate__lightSpeedInLeft {
  --animate-duration: 1s;
}

.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9;
  animation: bgScale 8s;
  overflow: hidden;
  .logo_name {
    font-size: 3rem;
    color: #faf9f9;
    margin-top: -10rem;
    z-index: 10;
    text-shadow: 0 0 5px rgb(17, 16, 16);
  }
  .logo {
    width: 1.5rem;
    height: 1.5rem;
    // background-color: #c2c;
    background-repeat: no-repeat;
    --animate-delay: 1s;
  }
  .wrapper {
    width: 100%;
    height: 50px;
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -3rem;
    .bar {
      position: absolute;
      bottom: 0;
      height: 2px;
      width: 700px;
      margin: 0 auto;
      background: #faf9f9;
      margin-top: 150px;
      border-radius: 2rem;
      .circle {
        position: absolute;
        top: -30px;
        margin-left: -30px;
        height: 40px;
        width: 40px;
        left: 0;
        background: #faf9f9;
        border-radius: 30%;
        animation: move 3s infinite;
      }
    }
  }
}
@keyframes bgScale {
  0% {
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23AE4119'/%3E%3Cstop offset='1' stop-color='%23330000'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FA3' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FA3' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover; 
  }
  100% {
    
    background-color: #330000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23AE4119'/%3E%3Cstop offset='1' stop-color='%23330000'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FA3' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FA3' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }
}
@keyframes move {
  0% {
    left: 0;
  }
  50% {
    left: 100%;
    transform: rotate(450deg);
    width: 100px;
    height: 100px;
  }
  75% {
    left: 100%;
    transform: rotate(450deg);
    width: 100px;
    height: 100px;
  }
  100% {
    right: 100%;
  }
}
</style>