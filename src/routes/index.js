import Vue from "vue";
import vueRouter from "vue-router";

let routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/canvas-getImageData.vue"),
  },

  {
    path: "/svg",
    name: "svg",
    component: () => import("../components/BaseSvg.vue"),
  },
  {
    path: "/canvas",
    name: "canvas",
    component: () => import("../components/BaseCanvas.vue"),
  },
  {
    path: "/hello",
    name: "hello",
    component: () => import("../components/HelloWorld.vue"),
  },
  {
    path: "/three",
    name: "three",
    component: () => import("../components/ThreeAnimation.vue"),
  },
];

Vue.use(vueRouter);
let router = new vueRouter({
  // mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log(to, from, next, "beforeEach");
  next();
});

export default router;
