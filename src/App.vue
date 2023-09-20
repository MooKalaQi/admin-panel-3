<template>
  <div class="app">
    <div class="sidebar_container">
      <SideBar :darkmode="theme" @change-theme="changetheme" />
    </div>
    <div class="pages">
      <router-view :darkmode="theme" ></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';
import sourceData from './data.json';
export default {
  data() {
    return {
      theme: sourceData.darkMode,
    };
  },
  components: {
    SideBar,
  },
  methods: {
    changetheme() {
      this.theme = !this.theme;
    },
  },
  // emits:['change-theme']
};
</script>
<style lang="scss" scoped>
.app {
  height: 100vh;
  display: flex;
  .sidebar_container {
    height: 100%;
  }
  .pages {
    width: 100%;
    height: 100%;
  }
}
</style>
