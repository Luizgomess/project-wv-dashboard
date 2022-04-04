<template>
<footer class="footer">
    <div class="footer__wrapper">
        <p class="footer__wrapper__text">made with love by luiz</p>
    </div>
</footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="less">
@import '../../assets/styles/colors.less';
@import '../../assets/styles/mixins.less';

.footer {
    position: static;
    left: 0;
    bottom: 0;
    background-color: @grey;
    padding: 1rem;
    margin-top: 60px;    
    &__wrapper {
        .maxContainerWidth();
        margin: 0 auto;
        &__text {
            text-align: end;
        }
    }
}
</style>
