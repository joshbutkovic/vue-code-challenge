<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link class="navbar-item navbar-logo" to="/">
                    <img src="../../../src/assets/logo_white.png" />
                </router-link>
            </div>
            <div id="main-menu" class="navbar-menu">
                <transition name="toggle-search">
                    <div v-if="!isSearchOpen" class="navbar-end switch-links">
                        <a
                            class="navbar-item is-hoverable"
                            v-if="areBenefitsActive"
                            @click="toggleSearch"
                        >
                            <font-awesome-icon icon="search" />
                        </a>
                        <router-link
                            v-for="item of navItems"
                            v-bind:key="item.index"
                            :class="'navbar-item is-hoverable ' + item.toLowerCase()"
                            :to="'/' + item.toLowerCase()"
                        >{{item}}</router-link>
                    </div>
                    <div v-else class="navbar-end">
                        <a :class="{ 'search-open': isSearchOpen }">
                            <div class="field has-addons">
                                <div class="control">
                                    <input
                                        v-model="searchTerm"
                                        @keyup="handleKeyPress"
                                        type="text"
                                        class="input is-info"
                                        placeholder="Search Benefits"
                                    />
                                </div>
                                <div class="control" @click="toggleSearch">
                                    <a class="button is-info">Back</a>
                                </div>
                            </div>
                        </a>
                    </div>
                </transition>
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
            isSearchOpen: false,
            searchTerm: '',
            navItems: ['Benefits', 'Safety', 'Policies'],
        };
    },
    methods: {
        toggleSearch() {
            this.isSearchOpen = !this.isSearchOpen;
            this.$store.dispatch('app/setSearchTerm', '');
            this.searchTerm = '';
        },
        handleKeyPress(e) {
            this.searchTerm = e.target.value;
            this.$store.dispatch('app/setSearchTerm', this.searchTerm);
            const { key } = event;
            if (
                (key === 'Backspace' || key === 'Delete') &&
                this.searchTerm.length < 2
            ) {
                this.searchTerm = '';
            }
        },
        resetBenefits() {
            this.searchTerm = '';
        },
    },
    computed: {
        areBenefitsActive() {
            return this.$route.path === '/benefits';
        },
    },
    watch: {
        $route() {
            this.isSearchOpen = false;
            this.searchTerm = '';
        },
    },
};
</script>

<style scoped lang="scss">
.navbar {
    background-color: $menu-bg;
    min-height: 3.4rem;
    .navbar-brand a.navbar-item.navbar-logo {
        width: 19rem;
        background: $black;
        &:hover {
            transition: none !important;
        }
    }
    a.navbar-item {
        color: #ededed;
        -webkit-transition: all 5ms ease-in-out;
        transition: all 250ms ease-in-out;
        font-size: 15px;
        padding: 0 18px;
        margin: 0 4px;
        align-items: center;
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 4px;
            transform: scaleX(0);
            background-color: $primary;
            transition: transform 200ms;
            top: 34px;
        }
        &:hover:not(.navbar-logo),
        &:active:not(.navbar-logo),
        &.is-active:not(.navbar-logo) {
            background-color: $menu-bg;
            color: $white;
            &:after {
                transform: scaleX(1);
            }
        }
        &:focus,
        &:focus-within {
            background-color: $menu-bg;
            transition: none;
        }
    }
    a.search-open {
        display: flex;
        font-size: 15px;
        padding: 0 18px;
        margin: 0 4px;
        align-items: center;
        .is-info {
            border-color: $black;
        }
    }
    .button.is-info {
        background: $primary;
    }
    .navbar-end {
        align-items: center;
    }
    @media screen and (max-width: 653px) {
        flex-wrap: wrap;
        justify-content: center !important;
        border: 1px solid $black;
        .navbar-brand {
            min-height: 2.5rem;
        }
        .navbar-end {
            justify-content: center !important;
        }
        a.navbar-item::after {
            top: 26px;
        }
    }
    .toggle-search-enter-active,
    .toggle-search-leave-active {
        transition: opacity 0.4s ease;
    }

    .toggle-search-enter,
    .toggle-search-leave-active {
        opacity: 0;
    }
}
</style>