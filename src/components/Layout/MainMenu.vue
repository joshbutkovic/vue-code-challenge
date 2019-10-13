<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">
                <img src="../../../src/assets/logo_white.png" />
            </a>
        </div>

        <div id="main-menu" class="navbar-menu">
            <div class="navbar-end">
                <router-link class="navbar-item is-hoverable" to="/benefits">Benefits</router-link>
                <router-link class="navbar-item is-hoverable" to="/policies">Policies</router-link>
                <router-link class="navbar-item is-hoverable" to="/safety">Safety</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'MainMenu',
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