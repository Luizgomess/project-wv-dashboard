<template>
  <article class="description-component">
    <h1 class="description-component__title">
      {{
        descriptionProperties.transactionType === "from"
          ? "Transferindo de"
          : "Para"
      }}
    </h1>
    <section class="description-component__amount-container">
      <strong>{{ descriptionProperties.commercialEntity }}</strong>
      <p>
        {{
          new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(descriptionProperties.amount)
        }}
      </p>
    </section>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { DescriptionProperties } from "@/types/DescriptionProperties";

@Component({})
export default class DescriptionTransaction extends Vue {
  @Prop() descriptionProperties!: DescriptionProperties;
}
</script>

<style lang="less">
@import "../../assets/styles/colors.less";
@import "../../assets/styles/mixins.less";

.description-component {
  &__title {
    font-size: 2rem;
    margin-bottom: 40px;
    font-weight: 500;
  }

  &__amount-container {
    width: 550px;
    margin-bottom: 28px;
    font-size: 1.4rem;
    display: flex;
    justify-content: space-between;
    position: relative;

    &::before {
      content: "";
      top: -26px;
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: rgba(@grey, 1.8);
    }

    strong {
      font-weight: bold;
      color: @black-300;
    }

    @media (max-width: 720px) {
      width: 70vw;
    }
  }
}
</style>
