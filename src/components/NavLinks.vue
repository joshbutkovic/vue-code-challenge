<template>
    <div>
        <!-- <a class="navbar-item is-hoverable" v-if="areBenefitsActive" @click="toggleSearch">
            <font-awesome-icon icon="search" />
        </a>-->
        <router-link
            v-for="item of navItems"
            v-bind:key="item.index"
            :class="'navbar-item is-hoverable ' + item.toLowerCase()"
            :to="'/' + item.toLowerCase()"
        >{{item}}</router-link>
    </div>
</template>

<script>
export default {
    name: 'MenuLinks',
    data() {
        return {
            navItems: ['Benefits', 'Safety', 'Policies'],
        };
    },
};
</script>

<style scoped>
</style>