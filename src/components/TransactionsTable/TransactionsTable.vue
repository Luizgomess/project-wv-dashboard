<template>
  <section class="transactions-table">
    <header class="transactions-table__header">
      <h1 class="title">Título</h1>
      <h1 class="description">Descrição</h1>
      <h1 class="status">Status</h1>
      <h1 class="amount">Valor</h1>
      <span class="transactions-table__header__mobile-title">Listagem</span>
      <span class="transactions-table__header__transaction-counter"
        >itens {{ transactions.length }}</span
      >
    </header>
    <main class="transactions-table__main">
      <TransactionItem
        v-for="transaction in transactions"
        :key="transaction.id"
        :transaction="transaction"
        v-on:click.native="showModal(transaction)"
      />
    </main>
    <TransactionModal
      v-show="isModalVisible"
      @close="closeModal"
      :transaction="transactionProperties"
    />
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TransactionItem from "@/components/TransactionItem/TransactionItem.vue";
import TransactionModal from "@/components/TransactionModal/TransactionModal.vue";
import { Transaction } from '@/types/Transaction';

@Component({
  components: {
    TransactionItem,
    TransactionModal,
  },
})
export default class TransactionTable extends Vue {
  @Prop() transactions!: Transaction;
  transactionProperties: Transaction = {
      id: "",
      title: "",
      description: "",
      status: "",
      amount: 0,
      date: "",
      from: "",
      to: ""
    };
  isModalVisible: boolean = false;

  showModal(transaction: Transaction): void {
    this.isModalVisible = true;
    this.transactionProperties = transaction;
  }

  closeModal(): void {
    this.isModalVisible = false;
  }
}
</script>

<style lang="less">
@import "../../assets/styles/colors.less";
@import "../../assets/styles/mixins.less";

.transactions-table {
  .maxContainerWidth();
  margin: 0 auto;
  padding: 0 20px;

  &__header {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: "title description description status amount";
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 0 20px;

    h1 {
      justify-self: center;
      font-size: 1.5rem;
      font-weight: 600;
      color: @black-300;

      &.title {
        grid-area: title;
      }
      &.description {
        grid-area: description;
      }
      &.status {
        grid-area: status;
      }
      &.amount {
        grid-area: amount;
      }

      @media (max-width: 720px) {
        display: none;
      }
    }

    &__mobile-title {
      display: none;
      justify-self: start;
      font-size: 2.5rem;
      font-weight: 700;
    }

    &__transaction-counter {
      display: none;
      justify-self: end;
      font-size: 1.2rem;
      font-weight: 700;
      color: @grey;
    }

    &__mobile-title,
    &__transaction-counter {
      @media (max-width: 720px) {
        display: block;
        align-self: center;
      }
    }

    @media (max-width: 720px) {
      padding: unset;
      margin: unset;
      margin-bottom: 20px;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__main {
    min-height: 100vh;
  }
}
</style>
