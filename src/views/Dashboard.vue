<template>
  <div class="dashboard" :class="[darkmode ? 'darkmode' : '']">
    <Header name="Dashboard" :darkmode="darkmode"></Header>

    <div class="balance">
      <div class="balance_number">
        <p>
          Your Balance : <br />
          <span>{{ dashboard.balance }}</span>
        </p>
      </div>
      <div class="balance_info">
        <p>
          Your Income : <span> {{ dashboard.income }}</span>
        </p>
        <p>
          Expenses : <span>{{ expenses }} </span>
        </p>
        <p>
          Creadit : <span>{{ dashboard.credit }}</span>
        </p>
      </div>
    </div>
    <h4 style="margin-top: 5rem;">My goals are: </h4>
    <div class="goals">
      <div class="goal">
        <p>Buy A Mac :</p>
        <input
          type="range"
          :value="dashboard.planings['buy a mac'].saved"
          :max="dashboard.planings['buy a mac'].price"
          disabled
        />
      </div>
      <div class="goal">
        <p>Buy A Car :</p>
        <input
          type="range"
          :value="dashboard.planings['buy a car'].saved"
          :max="dashboard.planings['buy a car'].price"
          disabled
        />
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import sourceData from '../data.json';
export default {
  data() {
    return {
      dashboard: sourceData.dashboard[0],
    };
  },
  props: {
    darkmode: Boolean,
  },
  components: {
    Header,
  },
  computed: {
    expenses() {
      let expenses =
        this.dashboard.expenses.traveling +
        this.dashboard.expenses.food +
        this.dashboard.expenses.health +
        this.dashboard.expenses.shopping;
      return expenses;
    },
  },
};
</script>
<style lang="scss" scoped>
.dashboard {
  width: 100%;
  height: 100%;
  background-color: #e8e8e8;
  color: white;
}
.balance {
  color: black;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  //   align-items: center;
  .balance_number {
    margin: 0;
    padding: 1rem;
    p {
      font-size: 1.5rem;
      color: black;
    }
    span {
      font-size: 2rem;
      color: black;
    }
  }
  .balance_info {
    display: flex;
    p {
      font-size: 1.5rem;
      color: black;
      padding: 1rem;
    }
    span {
      font-size: 1.4rem;
      color: black;
    }
  }
}
.goals {
  display: flex;
  margin-top: 2rem;
  padding: 1.5rem;
  .goal{
    width: 40%;
  }
  input{
    width: 80%;
    margin-top: 1rem;
    
  }
}
.darkmode {
  background: #181818f4;
  .balance {
    margin-top: 5rem;
    .balance_number {
      p,
      span {
        color: white;
      }
    }
    .balance_info {
      p,
      span {
        color: white;
      }
    }
  }
}
</style>
