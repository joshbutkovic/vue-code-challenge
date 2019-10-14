<template>
    <!-- <div v-if="filteredBenefits" class="columns is-multiline">
        <div v-for="item of filteredBenefits" v-bind:key="item.index" class="column is-3">
            <card :title="item.title" :description="item.description" />
        </div>
    </div>-->
    <div class="columns is-multiline">
        <div v-for="item of benefits" v-bind:key="item.index" class="column is-3">
            <card :title="item.title" :description="item.description" />
        </div>
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
            // filteredBenefits: null,
        };
    },
    mounted() {
        // eslint-disable-next-line
        console.log(this.benefits);
    },
    computed: {
        ...mapGetters('data', ['benefits']),
        ...mapGetters('data', ['filteredBenefits']),
    },
};
</script>

<style scoped>
</style>

