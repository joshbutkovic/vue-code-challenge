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
                                <!-- <div class="control">
                                    <a class="button is-info">
                                        <font-awesome-icon icon="search" />
                                    </a>
                                </div>-->
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
            navItems: ['Benefits', 'Safety', 'Policies'],
            isSearchOpen: false,
            searchTerm: '',
        };
    },
    mounted() {
        console.log('BENEFITS');
        console.log(this.areBenefitsActive);
        console.log(this.$route);
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
                console.log('clear the searchTerm');
                this.searchTerm = '';
            }
        },
        resetBenefits() {
            console.log('reset benefits called');
            this.searchTerm = '';
        },
    },
    computed: {
        areBenefitsActive() {
            return this.$route.path === '/benefits';
        },
    },
    watch: {
        $route(to, from) {
            this.isSearchOpen = false;
            this.searchTerm = '';
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
    min-height: 3.4rem;
    .button.is-info {
        background: $primary;
    }
    a.navbar-item {
        color: #ededed;
        -webkit-transition: all 5ms ease-in-out;
        transition: all 250ms ease-in-out;
        font-size: 15px;
        padding: 0 18px;
        margin: 0 4px;
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
    .navbar-brand a.navbar-item.navbar-logo {
        width: 19rem;
        &:hover {
            transition: none !important;
        }
    }
    a.search-open {
        // color: #ededed;
        // -webkit-transition: all 5ms ease-in-out;
        // -webkit-transition: all 250ms ease-in-out;
        // transition: all 250ms ease-in-out;
        display: flex;
        font-size: 15px;
        padding: 0 18px;
        margin: 0 4px;
        align-items: center;
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