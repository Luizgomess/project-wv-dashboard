<template>
  <section class="progress-bar-component">
    <div class="progress-bar-component__wrapper">
      <div
        class="progress-bar-component__wrapper__bar"
        v-bind:class="[progressBarState]"
      ></div>
    </div>
    <footer class="progress-bar-component__field-label">
      <p>Solicitada</p>
      <p>Processando</p>
      <p>Concluída</p>
    </footer>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProgressBar extends Vue {
  @Prop() private progressBarState!: string;
}
</script>

<style lang="less">
@import '../../assets/styles/colors.less';
@import '../../assets/styles/mixins.less';

.progress-bar-component {
  width: 550px;
  margin: 0 auto;

  &__wrapper {
    width: 100%;
    background-color: @grey;
    height: 40px;
    padding: 7px;
    margin-bottom: 20px;
    border-radius: 8px;

    &__bar {
      height: 100%;
      background-color: @white;
      border-radius: 8px;

      &.created {
        width: 10%;
      }

      &.processing {
        width: 50%;
      }

      &.processed {
        width: 100%;
      }
    }
  }

  &__field-label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
  }

  @media (max-width: 720px) {
    width: 70vw;
  }
}
</style>
