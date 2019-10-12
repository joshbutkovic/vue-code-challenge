<template>
    <div id="app">
        <main-menu />
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<script>
import MainMenu from './components/MainMenu';
export default {
    name: 'app',
    components: { MainMenu },
    created() {
        // eslint-disable-next-line
        console.log(this.$store);
        this.$store.dispatch('benefits/loadBenefits');
    },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25sease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
