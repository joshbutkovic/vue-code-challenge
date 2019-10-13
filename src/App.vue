<template>
    <div id="app">
        <main-menu />
        <div class="section">
            <div class="container is-fluid">
                <transition name="fade" mode="out-in">
                    <router-view />
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import MainMenu from './components/Layout/MainMenu';
export default {
    name: 'app',
    components: { MainMenu },
    created() {
        this.$store.dispatch('data/loadData');
    },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

#app {
    .section {
        padding: 1.75rem;
        .container.is-fluid {
            margin-left: unset;
            margin-right: unset;
        }
    }
}
</style>

