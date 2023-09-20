<template>
  <form @submit="submitNewCard">
    <label for="cardNumber">
      Card Number:
      <input type="number" name="cardNumber" v-model="cardNumber" />
    </label>
    <label for="Cvv2">
      Cvv2:
      <input type="number" name="Cvv2" v-model="CVV2" />
    </label>
    <label for="ExpDate">
      Expire Date:
      <input type="text" name="ExpDate" v-model="ExpDate" />
    </label>
    <label for="Saving" style="display: flex">
      It's saving?
      <input type="checkbox" name="saving" v-model="Saving" />
    </label>
    <input type="submit" value="Submit" />
  </form>
</template>
<script>
import sourceDatra from '../data.json'
export default {
  data() {
    return {
      cardNumber: '',
      CVV2: '',
      ExpDate: '',
      Saving: false,
      id: sourceDatra.cards.length+1
    };
  },
  methods: {
    submitNewCard(e) {
        e.preventDefault();

      if (!this.cardNumber || !this.CVV2 || !this.ExpDate) {
        alert('please fill out all forms');
      }
      const newCard = {
        cardNumber: this.cardNumber,
        CVV2: this.CVV2,
        ExpDate: this.ExpDate,
        Saving: this.Saving,
        id : this.id
      };
      this.$emit('add-new-card', newCard);
      (this.cardNumber = ''),
        (this.CVV2 = ''),
        (this.ExpDate = ''),
        (this.Saving = false);
    },
  },
  emits:['add-new-card']
};
</script>
<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    margin: 1rem;
    width: 100%;
    font-size: 1.5rem;
  }
  input {
    width: 100%;
    height: 3rem;
  }
  input[type='submit'] {
    &:hover {
      background: none;
      color: white;
      border: 2px solid white;
    }
  }
}
</style>
