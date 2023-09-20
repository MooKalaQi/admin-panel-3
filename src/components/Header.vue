<template>
  <div class="header" :class="[darkmode ? 'darkmode' : '']">
    <div class="header_title">
      {{ name }}
    </div>
    <div class="header_searchbar">
      <form class="header_searchbar-form">
        <label for="searchbar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" name="searchbar"
        /></label>
      </form>
      <button class="header_searchbar-notification">
        <i class="fa-regular fa-bell"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    name: String,
    darkmode: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: #e8e8e8;
  border-bottom: 3px solid rgb(46, 46, 46);
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header_title {
    font-size: 3rem;
    color: #d2de32;
    font-weight: bolder;
    padding: 0 5rem;
  }
  .header_searchbar {
    display: flex;
    padding: 0 5rem;
    .header_searchbar-form {
      width: 20rem;
      height: 3rem;
      label {
        height: 100% !important;
        display: flex;
        align-items: center;
        i {
          font-size: 1.5rem;
          color: #016a70;
        }
        input {
          width: 80% !important;
          height: 100%;
          border: none;
          background: #016a70;
        }
      }
    }
  }
  .header_searchbar-notification {
    background: #016a70;
    color: white;
    width: 3rem;
    border: none;
    i {
      font-size: 2rem;
    }
  }
}
.darkmode {
  background: #181818f4 !important;
  border-bottom: 5px solid white;
  .header_title {
    color: #a2c579;
  }
  .header_searchbar-form {
    background: white;
    label {
      background: white;
      input {
        background: white!important;
      }
      i {
        color: #181818f4;
        background: white;
      }
    }
  }

  .header_searchbar-notification {
    width: 3rem;
    border: none;
    background: white;
    i {
      font-size: 2rem;
      color: #181818f4;
    }
  }
}
</style>
