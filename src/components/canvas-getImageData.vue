<template>
  <div>
    <canvas class="imgdata"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let img1 = new Image();
      img1.src = require("../assets/logo.png");
      let img2 = new Image();
      img2.src = require("../assets/demo.gif");
      let width = 300;
      let height = 300;

      let cvs = document.querySelector(".imgdata");
      cvs.width = width;
      cvs.height = height;
      let content = cvs.getContext("2d");
      img1.onload = function () {
        // 加载完后开始画  否则可能绘制失败
        content.drawImage(img1, 0, 0);
      };

      let vCvs = document.createElement("canvas");
      cvs.width = width;
      cvs.height = height;
      let vCvsContent = vCvs.getContext("2d");
      img2.onload = function () {
        vCvsContent.drawImage(img2, 0, 0);
        let imageData = vCvsContent.getImageData(0, 0, width, height);
        // ImageData ，包含像素值的数组对象。

        // dx
        // 源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量）。

        // dy
        // 源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量）。

        // dirtyX 可选
        // 在源图像数据中，矩形区域左上角的位置。默认是整个图像数据的左上角（x 坐标）。

        // dirtyY 可选
        // 在源图像数据中，矩形区域左上角的位置。默认是整个图像数据的左上角（y 坐标）。

        // dirtyWidth 可选
        // 在源图像数据中，矩形区域的宽度。默认是图像数据的宽度。

        // dirtyHeight 可选
        // 在源图像数据中，矩形区域的高度。默认是图像数据的高度。
        content.putImageData(imageData, 100, 100, 0, 0, 100, 100);
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
