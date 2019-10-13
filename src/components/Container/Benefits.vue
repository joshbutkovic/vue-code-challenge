<template>
    <div class="columns is-multiline">
        <!-- <transition name="fade" mode="out-in"> -->
        <!-- <div v-if="benefits" class="card-wrapper"> -->
        <div v-for="item of benefits" v-bind:key="item.index" class="column is-3">
            <card :title="item.title" :description="item.description" />
        </div>
        <!-- </div>
        <div v-else class="column">
            <h1 class="is-size-5">Benefits not loaded.</h1>
        </div>-->
        <!-- </transition> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '../Card';
export default {
    name: 'Benefits',
    components: { Card },
    props: { cardType: String },
    data() {
        return {
            test: 'test',
        };
    },
    computed: {
        ...mapGetters('data', ['benefits']),
    },
};
</script>

<style scoped>
</style>

