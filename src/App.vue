<template>
    <div id="app">
        <main-menu />
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
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

