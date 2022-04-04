<template>
  <article class="card-component" tabindex="0">
    <span class="card-component__title">{{ transaction.title }}</span>
    <span class="card-component__description">{{
      transaction.description
    }}</span>
    <span class="card-component__status">{{ transaction.status }}</span>
    <span class="card-component__amount">{{
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(transaction.amount)
    }}</span>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Transaction } from "@/types/Transaction";

@Component({})
export default class TransactionItem extends Vue {
  @Prop() transaction!: Transaction;
}
</script>

<style lang="less">
@import "../../assets/styles/colors.less";
@import "../../assets/styles/mixins.less";

.card-component {
  .maxContainerWidth();
  background-color: @grey;
  margin: 20px 0;
  padding: 16px 20px;
  border-radius: 18px;
  transition: transform 0.1s;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: "title description description status amount";
  align-items: center;

  span {
    justify-self: center;
    font-size: 1.3rem;
    min-width: 182px;
    text-align: center;
  }

  &__title {
    font-weight: 500;
    grid-area: title;
    @media (max-width: 720px) {
      font-size: 1.5rem;
      justify-self: start;
    }
  }

  &__description {
    grid-area: description;
  }

  &__status {
    grid-area: status;
  }

  &__amount {
    grid-area: amount;
  }

  &:hover {
    transform: translateY(-10px);
    background-color: @black-300;
    color: @orange;
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 150px;
    grid-template-areas:
      "title title"
      "description description"
      "amount status";

    span {
      min-width: unset;
    }
  }
}
</style>
