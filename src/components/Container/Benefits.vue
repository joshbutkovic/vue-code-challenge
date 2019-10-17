<template>
    <div class="section">
        <div class="container is-fluid" style="margin-right: 0; margin-left: 0;">
            <transition-group name="fade" tag="div" class="columns is-multiline is-mobile">
                <div
                    class="column is-12-mobile is-half-tablet is-one-third-widescreen is-one-quarter-fullhd"
                    v-for="item of filteredBenefits"
                    v-bind:key="item.title"
                >
                    <card :title="item.title" :description="item.description" :key="item.title" />
                </div>
            </transition-group>
            <div class="column">
                <h1 v-if="filteredBenefits.length === 0" class="is-size-5">
                    No Benefits found for search term
                    <strong>'{{searchTerm}}'</strong>
                </h1>
            </div>
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
        };
    },
    computed: {
        ...mapGetters('data', ['benefits']),
        ...mapGetters('app', ['searchTerm']),
        filteredBenefits() {
            let benefits = this.benefits;
            let filteredBenefits = [];
            let lowerCaseTitle;
            let lowerCaseDescription;
            if (this.searchTerm.length >= 3) {
                for (let item of benefits) {
                    lowerCaseTitle = item['title'].toLowerCase();
                    lowerCaseDescription = item['description'].toLowerCase();
                    if (
                        lowerCaseTitle.includes(
                            this.searchTerm.toLowerCase(),
                        ) ||
                        lowerCaseDescription.includes(
                            this.searchTerm.toLowerCase(),
                        )
                    ) {
                        filteredBenefits.push(item);
                    }
                }
            } else {
                return benefits;
            }
            return filteredBenefits;
        },
    },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    -webkit-transition: all 250ms ease;
    transition: all 250ms ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-move {
    -webkit-transition: -webkit-transform 250ms;
    transition: -webkit-transform 250ms;
    transition: transform 250ms;
    transition: transform 250ms, -webkit-transform 250ms;
}
</style>

