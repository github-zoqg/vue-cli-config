<template>
  <div class="base"></div>
</template>

<script>
import * as d3 from "d3";
import { select, selectAll } from "d3";
export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let padding = 20;
      let width = 500;
      let height = 200;
      let dataset = [100, 200, 110, 150, 140, 170];
      // 添加svg标签
      let SvgBaseDOM = select(".base")
        .append("svg")
        .attr("width", width + 100)
        .attr("height", height + 100)
        .style("background", "#999900");

      // 计算x轴缩放
      let xScale = d3
        .scaleLinear()
        .domain([0, 500])
        .range([padding, width - padding]);

      // 计算y轴缩放
      let yScale = d3
        .scaleLinear()
        .domain([0, 200])
        .range([height - padding, padding]);

      // 绘制数据
      SvgBaseDOM.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", (d, index) => xScale(index * 55) + padding)
        .attr("y", (d) => yScale(d))
        .attr("width", "50")
        .attr("height", (d) => yScale(height - d) - padding)
        .append("title")
        .text((d) => d);

      // 添加数据文本
      SvgBaseDOM.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text((d) => d)
        .attr("x", (d, index) => index * 50 + 2 * padding + 10)
        .attr("y", (d) => yScale(d) - 5);

      // 添加x轴
      let xAxis = d3.axisBottom(xScale);
      SvgBaseDOM.append("g")
        .attr(
          "transform",
          "translate(" + padding + "," + (height - padding) + ")"
        )
        .call(xAxis);
      // 添加y轴
      let yAxis = d3.axisLeft(yScale);
      SvgBaseDOM.append("g")
        .attr("transform", "translate(" + 2 * padding + ",0)")
        .call(yAxis);
    },
  },
};
</script>

<style lang="scss" scoped></style>
