<template>
  <section>
    <form class="form-filter">
      <fieldset id="filter-arguments" class="form-filter__fieldset">
        <legend class="form-filter__fieldset__title">Filtros</legend>
        <p class="form-filter__field form-filter__field--mask">
          <label for="transaction" class="form-filter__field__label">
            titulo
          </label>
          <img src="@/assets/icons/search.png" alt="icone de lupa" />
          <input
            type="text"
            v-model="filterTitle"
            name="transaction"
            id="transaction"
            placeholder="Pesquise pelo o título"
            class="form-filter__field__input"
          />
        </p>
        <p class="form-filter__field">
          <label for="select-status" class="form-filter__field__label"
            >status</label
          >
          <select
            name="select-status"
            id="select-status"
            v-model="filterStatus"
            class="form-filter__field__select"
          >
            <option value="" selected>Select your option</option>
            <option
              v-for="(option, index) in filterStatusOptions"
              :key="index"
              :value="option.status"
            >
              {{ option.status }}
            </option>
          </select>
        </p>
      </fieldset>
    </form>
    <TransactionsTable :transactions="filteredItems()" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { transactions } from "@/services/Transactions/Transactions";
import TransactionsTable from "@/components/TransactionsTable/TransactionsTable.vue";
import { Transaction } from "@/types/Transaction";

@Component({
  components: {
    TransactionsTable,
  },
})
export default class TransactionsDashboard extends Vue {
  transactionsData: Transaction[] = [];
  filterTitle: string = "";
  filterStatus: string = "";
  filterStatusOptions: Pick<Transaction, "status">[] = [
    {status: 'created'},
    {status: 'processing'},
    {status: 'processed'},
  ];

  created() {
    this.getTransactions();
  }

  async getTransactions() {
    transactions.get("transactions").then((transactions) => {
      this.transactionsData = this.orderTransactionsByDate(transactions.data);
    });
  }

  orderTransactionsByDate(transactions: Transaction[]): Transaction[] {
    const convertedStringToDate = transactions.map((obj) => {
      return { ...obj, date: new Date(obj.date) };
    });
    const transactionsSortByDate = convertedStringToDate.sort(
      (transactionA, transactionB) => {
        return transactionB.date.getTime() - transactionA.date.getTime();
      }
    );
    return transactionsSortByDate;
  }

  filteredItems(): Transaction[] {
    let transactionsFiltered = [];
    transactionsFiltered = this.transactionsData.filter((item) => {
      if (this.filterTitle == "") {
        return item;
      }
      return item.title.toLowerCase().indexOf(this.filterTitle.toLowerCase()) > -1;
    });

    transactionsFiltered = transactionsFiltered.filter((item) => {
      if (this.filterStatus == "") {
        return item;
      }
      return item.status === this.filterStatus;
    });

    return transactionsFiltered;
  }
}
</script>

<style lang="less">
@import "../assets/styles/colors.less";
@import "../assets/styles/mixins.less";

.form-filter {
  .maxContainerWidth();
  margin: 0 auto 50px;
  padding: 0 20px;

  &__fieldset {
    display: flex;
    justify-content: space-between;
    border: none;

    @media (max-width: 720px) {
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      font-size: 2.5rem;
      margin-bottom: 20px;
      font-weight: 500;
      color: #1f1f1f;
    }

    .form-filter__field {
      &__label {
        position: absolute;
        left: -999em;
        width: 1em;
        overflow: hidden;
      }
      &.form-filter__field--mask {
        width: 23rem;
        background: darken(@white, 5);
        position: relative;
        border-radius: 12px;

        img {
          position: absolute;
          top: 5px;
          left: 15px;
          width: 30px;
        }

        @media (max-width: 720px) {
          width: 100%;
          margin-bottom: 20px;
        }
      }

      &__input {
        width: 20rem;
        height: 36px;
        margin-top: 2px;
        margin-left: 46px;
        background: darken(@white, 5);
        border-radius: 0 12px 12px 0px;
        border: none;
        font-size: 1rem;
        padding-left: 10px;

        @media (max-width: 720px) {
          width: 84%;
        }
      }

      &__select {
        width: 18rem;
        height: 40px;
        padding-left: 11px;
        font-size: 1.2rem;

        border: none;
        background: darken(@white, 5);
        border-radius: 12px;

        @media (max-width: 720px) {
          width: 100%;
        }
      }
    }
  }
}
</style>
