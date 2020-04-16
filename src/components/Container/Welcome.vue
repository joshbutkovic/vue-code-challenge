<template>
    <section class="hero is-medium is-dark is-bold">
        <div class="hero-body">
            <div class="container">
                <p class="title">
                    Welcome to
                    <span>Vue</span>
                    <span>Sample</span>
                </p>
                <p class="subtitle">Benefits are now available</p>
                <router-link class="button is-primary is-large" to="/benefits">
                    View Benefits
                    <font-awesome-icon icon="chevron-circle-right" />
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: 'Welcome',
    components: { FontAwesomeIcon },
};
</script>

<style lang="scss" scoped>
.hero {
    p {
        span {
            margin-left: 0.25rem;
            letter-spacing: 4px;
            font-family: CenturyGothic, arial, sans-serif;
            font-weight: 600;
            &:nth-of-type(2) {
                color: $primary;
            }
        }
    }
    .button.is-large {
        font-size: 1.5rem;
        transition: all 150ms ease-in-out;
        &:hover {
            background-color: fade(#d21920, 40%);
        }
        svg {
            margin-left: 0.5rem;
        }
    }
}
</style>


