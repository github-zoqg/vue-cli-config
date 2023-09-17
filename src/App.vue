<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/demo.gif" />
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      :asd="'123'"
      className="asd"
      id="123"
      style="background-color: aliceblue"
    />
    <SvgBaseDOM />
    <CanvasDom />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import SvgBaseDOM from "./components/BaseSvg.vue";
import CanvasDom from "./components/BaseCanvas.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    SvgBaseDOM,
    CanvasDom,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
