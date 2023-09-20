<template>
  <div :class="[Saving ? 'saving' : 'accounting']" class="card_body">
    <div class="card_body-number">
      <p>{{ CardNumber }}</p>
    </div>
    <div class="card_body-info">
      <div class="card_body-info-exp">
        ExpDate: {{ CardExpDate }}
      </div>
      <div class="card_body-info-cvv">Cvv2:{{ CardCVV }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    CardNumber: Number,
    CardCVV: Number,
    CardExpDate: String,
    Saving: Boolean,
  },
};
</script>
<style lang="scss" scoped>
.saving {
  background: linear-gradient(125deg, #07469f, #1b8845);
}
.accounting {
  background: linear-gradient(125deg, #b88c0a, #5e1599);
}
.card_body {
  width: 25rem;
  height: 10rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .card_body-number {
    margin-bottom: 3rem;
    p {
      font-size: 1.5rem;
    }
  }
  .card_body-info{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    div{
        padding: 0rem 3rem ;
    }
  }
}
</style>
