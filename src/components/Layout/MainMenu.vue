<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item navbar-logo" to="/vue-sample-app/"
                >VueSample</router-link
            >
        </div>
        <div id="main-menu" class="navbar-menu">
            <div v-if="!isSearchOpen" class="navbar-end switch-links">
                <a
                    class="navbar-item is-hoverable search"
                    @click="toggleSearch"
                >
                    <font-awesome-icon
                        icon="search"
                        aria-disabled="areBenefitsActive"
                    />
                </a>
                <router-link
                    v-for="item of navItems"
                    v-bind:key="item.index"
                    :class="'navbar-item is-hoverable ' + item.toLowerCase()"
                    :to="'/vue-sample-app/' + item.toLowerCase()"
                    >{{ item }}</router-link
                >
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
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';
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
            if (this.areBenefitsActive) {
                this.isSearchOpen = !this.isSearchOpen;
                this.$store.dispatch('app/setSearchTerm', '');
                this.searchTerm = '';
            } else {
                this.$router.push('benefits');
            }
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
        ...mapGetters('app', ['theme']),
        areBenefitsActive() {
            return this.$route.path === '/vue-sample-app/benefits';
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
        font-size: 1.4rem;
        background: $black;
        &:hover {
            transition: none;
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
    a.navbar-item.search {
        transition: unset;
        &:after {
            transition: none;
            background: transparent;
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
    .svg-inline--fa.fa-w-16 {
        font-size: 1.125rem;
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
            top: 27px;
        }
    }
    // Dark Theme
    &.is-dark-theme {
        background-color: #ededed;
        .navbar-brand a.navbar-item.navbar-logo {
            background: #ededed;
            &:hover {
                transition: none;
            }
        }
        .navbar-menu {
            background: #ededed;
            a.navbar-item {
                color: $black;
                img {
                    background: #d6d6d6;
                    padding: 0.5rem;
                }
            }
        }
    }
}
</style>
