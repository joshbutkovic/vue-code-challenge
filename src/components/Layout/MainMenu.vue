<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
                <img src="../../../src/assets/logo_white.png" />
            </router-link>
        </div>

        <div id="main-menu" class="navbar-menu">
            <div class="navbar-end">
                <a class="navbar-item is-hoverable">
                    <font-awesome-icon icon="search" />
                </a>
                <router-link class="navbar-item is-hoverable" to="/benefits">Benefits</router-link>
                <router-link class="navbar-item is-hoverable" to="/policies">Policies</router-link>
                <router-link class="navbar-item is-hoverable" to="/safety">Safety</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: 'MainMenu',
    components: { FontAwesomeIcon },
    data() {
        return {
            navItems: ['Benefits', 'Safety', 'Policies'],
        };
    },
};
</script>

<style scoped lang="scss">
.navbar {
    background-color: $menu-bg;
    .navbar-brand a.navbar-item {
        width: 20rem;
    }
    a.navbar-item {
        .is-hoverable {
            border: 1px solid red;
        }
    }
}
</style>