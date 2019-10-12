<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item">
                <img src="../../src/assets/logo_white.png" />
            </a>
        </div>

        <div id="main-menu" class="navbar-menu">
            <div class="navbar-end">
                <a
                    :key="item.index"
                    v-for="item in navItems"
                    class="navbar-item is-hoverable"
                >{{item}}</a>
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
    .navbar-item {
    }
}
</style>