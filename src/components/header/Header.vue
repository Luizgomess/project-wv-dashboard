<template>
<header class="header">
    <div class="header__wrapper">
        <div class="header__wrapper__logo"></div>
    </div>
</header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({})
export default class Header extends Vue {}
</script>

<style lang="less">
@import '../../assets/styles/colors.less';
@import '../../assets/styles/mixins.less';

.header {
    margin-bottom: 3rem;
    padding: 1rem 0;
    width: 100%;
    &__wrapper {
        .maxContainerWidth();
        margin: 0 auto;
        padding: 0 20px;
        &__logo {
            width: 60px;
            height: 60px;
            background-color: darken(@grey, 10);
            margin: 0;
        }
    }
}
</style>
