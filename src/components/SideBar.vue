<template>
  <div class="sidebar" :class="[darkmode ? 'darkmode' : '']">
    <div class="logo">
      <router-link to="/">
        <h1>DevBank</h1>
      </router-link>
    </div>
    <div class="sidebar_items">
      <router-link v-for="item in items" :key="item.id" :to="item.slug">
        <h2>{{ item.name }}</h2>
      </router-link>
    </div>
    <div class="theme">
      <button v-if="darkmode" @click="changeTheme()">
        <i class="fa-solid fa-sun"></i>
      </button>
      <button v-else @click="changeTheme()">
        <i class="fa-solid fa-moon"></i>
      </button>
    </div>
  </div>
</template>
<script>
import sourceData from '../data.json';

export default {
  data() {
    return {
      items: sourceData.sidemenu,
    }
  },
  props:{
        darkmode : Boolean
    },
    methods:{
        changeTheme(){
            this.$emit('change-theme', this.darkmode)
        }
    },
    emits:['change-theme']
};
</script>
<style lang="scss" scoped>
.sidebar {
  height: 100%;
  width: 20rem;
  background-color: #016A70;
  color: #FFFFDD;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  .logo {
    text-align: center;
    a > h1 {
      font-size: 3rem;
      font-weight: 800;
    }
  }
  .sidebar_items {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    a {
      padding: 1.5rem;
      &:hover{
            transform: scale(1.2);
            transition: .5s;
        }
      h2 {
        font-size: 1.5rem;
        color: white;
        
      }
    }
  }
  .theme{
    display: flex;
    justify-content: center;
    button{
        width: 50%;
        height: 3rem;
        border: none ;
        border-radius: 10rem;
        background-color: #FFFFDD;
        cursor: pointer;
    }
    i{
        font-size: 2rem;
    }
    .fa-sun{
        color: #181818;
    }
    .fa-moon{
        color: #016A70;
    }
  }
}
.darkmode{
    background: #181818;
    color: #FFFFDD;
}
a {
  text-decoration: none;
  &:visited,
  &::after {
    color: white;
  }
}
</style>
