<template>
    <div class="section">
        <div class="container">
            <div class="columns is-multiline">
                <!-- <transition name="fade" mode="out-in"> -->
                <div class="column is-3 is-half-mobile">
                    <card />
                </div>
                <div class="column is-3 is-half-mobile">
                    <card />
                </div>
                <div class="column is-3 is-half-mobile">
                    <card />
                </div>
                <div class="column is-3 is-half-mobile">
                    <card />
                </div>
                <div class="column is-3 is-half-mobile">
                    <card />
                </div>
                <div class="column is-3 is-half-mobile">
                    <card />
                </div>
                <div class="column is-3 is-half-mobile">
                    <card />
                </div>
                <div class="column is-3 is-half-mobile">
                    <card />
                </div>
                <div class="column is-3 is-half-mobile">
                    <card />
                </div>
                <div class="column is-3 is-half-mobile">
                    <card />
                </div>
                <!-- </transition> -->
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '../Card';
export default {
    name: 'InfoCards',
    components: { Card },
    props: { cardType: String },
    computed: {
        ...mapGetters('data', ['benefits']),
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>
</style>