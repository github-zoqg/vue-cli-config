<template>
  <div class="links">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="select"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <router-link to="/three">three</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    <div>
      <router-link to="/">home</router-link>
    </div>
    <div>
      <router-link to="/svg">svg</router-link>
    </div>
    <div>
      <router-link to="/canvas">canvas</router-link>
    </div>
    <div>
      <router-link to="/hello">hello</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    select(index, indexPath) {
      console.log(index, indexPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.links {
  width: 200px;
  flex-shrink: 0;
  background: linear-gradient(
    rgba(255, 0, 0, 0.5),
    rgba(255, 165, 0, 0.5),
    rgba(255, 255, 0, 0.5),
    rgba(0, 255, 0, 0.5),
    rgba(0, 255, 255, 0.5),
    rgba(0, 0, 255, 0.5),
    rgba(139, 0, 255, 0.4)
  );
}
</style>
