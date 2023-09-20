<template>
  <Header name="About" :darkmode="darkmode"></Header>
  <div class="about" :class="[darkmode ? 'darkmode' : '']">
    <div class="creator">
      <p>let's talk about who made this website !</p>
      <h1>MooKalaQi</h1>
      <img src="../../public/creator.jpg" alt="" />
      <div class="socials">
        <a href="https://twitter.com/MooKalaQi" target="_blank">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://t.me/mookalaqi" target="_blank"
          ><i class="fa-brands fa-telegram"></i
        ></a>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
export default {
  components: {
    Header,
  },
  props: {
    darkmode: Boolean,
  },
};
</script>
<style lang="scss" scoped>
.about {
  background-color: #e8e8e8;
  height: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  .creator {
    padding-top: 10rem;
    img {
      margin-top: 3rem;
      width: 15rem;
      border-radius: 20rem;
      height: 15rem;
      object-fit: cover;
    }
    .socials {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      a > i {
        font-size: 2rem;
        color: rgb(28, 28, 28);
        &:hover {
          transform: scale(1.5);
          transition: 0.5s;
          color: #d2de32;
        }
      }
    }
  }
}
.darkmode {
  color: white;
  background: #181818f4;
  .creator {
    .socials {
      a > i {
        font-size: 2rem;
        color: white;
        &:hover {
          transform: scale(1.5);
          transition: 0.5s;
          color: #a2c579;
        }
      }
    }
  }
}
.socials {
  a > i {
    font-size: 2rem;
    color: black;
    &:hover {
      transform: scale(1.5);
      transition: 0.5s;
      color: #a2c579;
    }
  }
}
</style>
