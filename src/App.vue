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
.fade-enter-active,
.fade-leave-active {
    transition: opacity 300ms ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

html,
body,
#app {
    font-family: 'Open Sans', sans-serif, monospace;
}

#app {
    height: 100% !important;
    background: #ededed !important;
    .section {
        padding: 1.5rem;
        .container.is-fluid {
            @media screen and (min-width: 1024px) {
                .container.is-fluid {
                    margin-left: auto !important;
                    margin-right: auto !important;
                    max-width: none;
                }
            }
        }
    }
}
.svg-inline--fa {
    font-size: 1.4rem;
}
</style>

