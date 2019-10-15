<template>
    <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link class="navbar-item navbar-logo" to="/">
                    <img src="../../../src/assets/logo_white.png" />
                </router-link>
            </div>
            <div id="main-menu" class="navbar-menu">
                <transition name="fade-long">
                    <div v-if="!isSearchOpen" v-show="!isSearchOpen" class="navbar-end">
                        <a class="navbar-item is-hoverable" @click="toggleSearch">
                            <font-awesome-icon icon="search" />
                        </a>
                        <router-link
                            v-for="item of navItems"
                            v-bind:key="item.index"
                            :class="'navbar-item is-hoverable ' + item.toLowerCase()"
                            :to="'/' + item.toLowerCase()"
                        >{{item}}</router-link>
                    </div>
                    <div v-else v-show="isSearchOpen" class="navbar-end">
                        <a class="navbar-item">
                            <div class="field has-addons">
                                <div class="control has-icons-left">
                                    <input
                                        v-model="searchTerm"
                                        @keyup="handleKeyPress"
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
            navItems: ['Benefits', 'Safety', 'Policies'],
            isSearchOpen: false,
            searchTerm: '',
        };
    },
    methods: {
        toggleSearch() {
            this.isSearchOpen = !this.isSearchOpen;
        },
        handleKeyPress(e) {
            this.searchTerm = e.target.value;
            this.$store.dispatch('app/setSearchTerm', this.searchTerm);
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
    a.navbar-item {
        color: #c0c0c0;
        -webkit-transition: all 5ms ease-in-out;
        transition: all 250ms ease-in-out;
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 3px;
            transform: scaleX(0);
            background-color: $primary;
            transition: transform 200ms;
        }
        &:hover:not(.navbar-logo),
        &:active:not(.navbar-logo) {
            background-color: $menu-bg;
            color: $white;
            &:after {
                transform: scaleX(1);
            }
        }
        &:focus {
            background-color: $menu-bg;
            transition: none;
        }
    }
    .navbar-brand a.navbar-item.navbar-logo {
        width: 18.5rem;
        &:hover {
            transition: none !important;
        }
    }
    .fade-long-enter-active,
    .fade-long-leave-active {
        transition: opacity 0.4s ease;
    }

    .fade-long-enter,
    .fade-long-leave-active {
        opacity: 0;
    }
}
</style>