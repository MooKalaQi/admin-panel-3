<template>
  <Header name="Cards" :darkmode="darkmode"></Header>
  <div class="cards" :class="[darkmode ? 'darkmode' : '']">
    <Card
      :key="shownCard.id"
      :CardNumber="shownCard.cardNumber"
      :CardCVV="shownCard.cvv2"
      :CardExpDate="shownCard.expDate"
      :Saving="shownCard.saving"
    >
    </Card>
    <div class="card_counter">
      <p v-for="card in cards" :key="card.id" @click="ShownCard(card.id)">
        {{ card.id }}
      </p>
    </div>
    <div class="addCard">
      <button @click="handleAddCard()">Add a card</button>
      <AddCard v-if="this.showAddCard" @add-new-card="addNewCard"></AddCard>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import sourceData from '../data.json';
import Card from '../components/Card.vue';
import AddCard from '../components/AddCard.vue';
export default {
  data() {
    return {
      cards: sourceData.cards,
      shownCard: sourceData.cards[0],
      showAddCard: false,
    };
  },
  components: {
    Header,
    Card,
    AddCard,
  },
  methods: {
    ShownCard(id) {
      let newShownCard = this.cards.find(card => card.id === id);
      this.shownCard = newShownCard;
      return this.shownCard;
    },
    handleAddCard() {
      this.showAddCard = !this.showAddCard;
      console.log(this.showAddCard);
      return this.showAddCard;
    },
    addNewCard(newCard) {
      this.cards = [...this.cards, newCard];
      console.log(newCard ,this.cards);
    },
  },
  props: {
    darkmode: Boolean,
  },
};
</script>
<style lang="scss" scoped>
.cards {
  background-color: #e8e8e8;
  color: black;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
}
.card_counter {
  display: flex;
  p {
    padding: 1rem;
    margin: 1rem;
    border: 2px solid black;
    &:hover {
      transform: scale(0.8);
      transition: 0.5s;
    }
  }
}
.addCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 8rem;
    height: 3rem;
    font-size: 1.2rem;
    background: #a2c579;
    border: none;
    border-radius: 5px;
    color: white;
  }
}
.darkmode {
  background: #181818f4 !important;
  color: white;

  .card_counter {
    p {
      color: white;
      border: 2px solid white;
    }
  }
  .addCard {
    button {
      background: #d2de32;
      color: #181818;
    }
  }
}
</style>
