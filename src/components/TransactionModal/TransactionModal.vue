<template>
  <section class="modal-component" tabindex="0">
    <article class="modal-component__wrapper">
      <button
        class="modal-component__wrapper__close-button"
        id="close"
        type="button"
        @click="close"
        title="fechar modal"
      >
        &#x2715;
      </button>

      <h1 class="modal-component__wrapper__title">
        {{ transaction.title }}
      </h1>
      <ProgressBar :progressBarState="transaction.status" />
      <DescriptionTransaction
        :descriptionProperties="setDescriptionData(transaction, 'from')"
      />
      <DescriptionTransaction
        :descriptionProperties="setDescriptionData(transaction, 'to')"
      />
    </article>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProgressBar from "@/components/Progressbar/Progressbar.vue";
import DescriptionTransaction from "@/components/DescriptionTransaction/DescriptionTransaction.vue";
import { Transaction } from "@/types/Transaction";
import { DescriptionProperties } from "@/types/DescriptionProperties";

@Component({
  components: {
    ProgressBar,
    DescriptionTransaction,
  },
})
export default class TransactionModal extends Vue {
  @Prop() private transaction!: Transaction;

  close(): void {
    this.$emit("close");
  }

  setDescriptionData(
    transaction: Transaction,
    transactionType: string
  ): DescriptionProperties {
    return {
      transactionType: transactionType === "from" ? "from" : "to",
      commercialEntity:
        transactionType === "from" ? transaction.from : transaction.to,
      amount: transaction.amount,
    };
  }
}
</script>

<style lang="less">
@import "../../assets/styles/colors.less";

.modal-component {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(@grey, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
  &__wrapper {
    width: 1220px;
    height: 600px;
    border-radius: 10px;
    background-color: @white;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px 0;

    &__title {
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    }

    &__close-button {
      position: absolute;
      top: 30px;
      right: 30px;
      background: transparent;
      border: none;
      font-size: 1.5rem;
      font-weight: 800;
    }

    @media (max-width: 720px) {
      height: 600px;
      border-radius: 20px 20px 0;
    }
  }

  @media (max-width: 720px) {
    align-items: flex-end;
  }
}
</style>
