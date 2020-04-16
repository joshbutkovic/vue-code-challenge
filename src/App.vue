<template>
    <div id="app">
        <main-menu />
        <router-view />
    </div>
</template>

<script>
import MainMenu from './components/Layout/MainMenu';
import benefitsJson from '../benefits.json';
export default {
    name: 'app',
    components: { MainMenu },
    created() {
        this.$store.dispatch('data/loadData', benefitsJson);
    },
};
</script>

<style lang="scss">
@import './node_modules/bulma/bulma.sass';
@import './src/styles/bulma-overrides.scss';
.router-fade-enter-active,
.router-fade-leave-active {
    transition: opacity 125ms ease-in-out;
}

.router-fade-enter,
.router-fade-leave-active {
    opacity: 0;
}
</style>

