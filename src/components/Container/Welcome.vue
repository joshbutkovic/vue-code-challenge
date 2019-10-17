<template>
    <section class="hero is-medium is-dark is-bold">
        <div class="hero-body">
            <div class="container">
                <p class="title">
                    Welcome to
                    <span>SWITCH</span>
                    <span>DOCK</span>
                </p>
                <p class="subtitle">Benefits are now available</p>
                <router-link class="button is-primary is-large" to="/benefits">
                    VIEW BENEFITS
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
        font-size: 1.75rem;
        transition: all 300ms ease-in-out;
        &:hover {
            color: $black;
            background: hsl(0, 0%, 93%);
            border: 1px solid $primary;
        }
        svg {
            margin-left: 0.5rem;
        }
    }
}
</style>


