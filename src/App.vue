<template>
  <div id="app">
    <!-- <img src="/static/demo.gif" alt="" /> -->
    <canvas id="rain" class="setTobj"></canvas>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" :asd="'123'" id="123" />
    <SvgBaseDOM />
    <CanvasDom /> -->
    <NavLink></NavLink>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import SvgBaseDOM from "./components/BaseSvg.vue";
// import CanvasDom from "./components/BaseCanvas.vue";
import NavLink from "./nav-link/leftLink.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // SvgBaseDOM,
    // CanvasDom,
    NavLink,
  },
  data() {
    return {
      fontSize: 16,
      ctx: null,
      itemLength: Number,
      arrIndex: Array,
      height: Number,
    };
  },
  mounted() {
    // setTimeout(() => {
    this.initRain();
    // }, 0);
  },
  methods: {
    initRain() {
      this.itemLength = parseInt(window.innerWidth / this.fontSize);
      this.arrIndex = new Array(this.itemLength).fill(0);
      this.height = window.innerHeight - 1;
      let rain = document.querySelector("#rain");
      rain.width = window.innerWidth;
      rain.height = this.height;
      // 获取内容开始填充
      this.ctx = rain.getContext("2d");
      this.ctx.font = `${this.fontSize}px Arial`;
      this.drawRain();
    },
    drawRain() {
      this.ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      this.ctx.fillRect(0, 0, window.innerWidth, this.height);
      for (let i = 0; i < this.itemLength; i++) {
        let y = this.fontSize * this.arrIndex[i];
        if (y > this.height && Math.random() > 0.99) {
          this.arrIndex[i] = 0;
          y = this.fontSize * this.arrIndex[i];
        }
        this.ctx.fillStyle = this.randomColor();
        this.ctx.fillText(this.randomStr(), i * this.fontSize, y);
        this.arrIndex[i]++;
      }
      window.requestAnimationFrame(this.drawRain);
    },
    // 随机颜色
    randomColor() {
      let colors = [
        "#FF0000",
        "#FF7F00",
        "#FFFF00",
        "#00FF00",
        "#00FFFF",
        "#0000FF",
        "#8B00FF",
      ];
      return colors[~~(Math.random() * colors.length)];
    },
    // 随机文字
    randomStr() {
      let strarr = `console.log('hello world!')`.split("");
      return strarr[~~(Math.random() * strarr.length)];
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // padding-top: 60px;
  width: 100%;
  height: 100vh;
  overflow: auto;
  box-sizing: border-box;
  display: flex;
  .content {
    flex-grow: 1;
  }
}
* {
  margin: 0;
}
.setTobj {
  position: absolute;
  top: 0%;
  left: 0;
  z-index: -1;
}
</style>
