<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link class="navbar-item" to="/">
                    <img src="../../../src/assets/logo_white.png" />
                </router-link>
            </div>
            <div id="main-menu" class="navbar-menu">
                <div v-if="!isSearchOpen" class="navbar-end">
                    <a class="navbar-item is-hoverable" @click="toggleSearch">
                        <font-awesome-icon icon="search" />
                    </a>
                    <router-link
                        v-for="item of navItems"
                        v-bind:key="item.index"
                        class="navbar-item is-hoverable"
                        :to="'/' + item.toLowerCase()"
                    >{{item}}</router-link>
                </div>
                <div v-else class="navbar-end">
                    <a class="navbar-item">
                        <div class="field has-addons">
                            <div class="control has-icons-left">
                                <input
                                    v-model="searchTerm"
                                    @keyup="handleKeyup"
                                    type="search"
                                    class="input is-info"
                                    placeholder="Search"
                                />
                                <span class="icon is-small is-left">
                                    <font-awesome-icon icon="search" />
                                </span>
                            </div>
                            <div class="control">
                                <a class="button is-info">
                                    <font-awesome-icon icon="search" />
                                </a>
                            </div>
                            <div class="control" @click="toggleSearch">
                                <a class="button is-info">Close</a>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: 'MainMenu',
    components: { FontAwesomeIcon },
    data() {
        return {
            navItems: ['Benefits', 'Safety', 'Policies'],
            isSearchOpen: false,
            searchTerm: '',
        };
    },
    methods: {
        toggleSearch() {
            this.isSearchOpen = !this.isSearchOpen;
        },
        handleKeyup(e) {
            this.searchTerm = e.target.value;
            this.$store.dispatch('data/filteredBenefits', [
                { name: 'benefit 1' },
                { name: 'benefit 2' },
                { name: 'benefit 3' },
            ]);
            // this.searchTerm.length >= 2 &&
            //     this.$store.dispatch('data/filteredBenefits', [
            //         { name: 'benefit 1' },
            //         { name: 'benefit 2' },
            //         { name: 'benefit 3' },
            //     ]);
        },
    },
};
</script>

<style scoped lang="scss">
.hero.is-primary.is-search {
    .close-button {
        .fa-window-close {
            // &:hover {
            cursor: pointer;
            font-size: 2rem;
            // }
        }
    }
    .hero-body {
        padding: 1rem 1.5rem;
        background: $primary;
        .field.has-addons {
            display: flex;
            justify-content: flex-end;
        }
    }
}
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