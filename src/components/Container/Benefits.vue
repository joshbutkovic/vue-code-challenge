<template>
    <div class="section">
        <div class="container is-fluid" style="margin-right: 0; margin-left: 0;">
            <transition-group name="shuffle-cards" tag="div" class="columns is-multiline is-mobile">
                <div
                    class="column is-12-mobile is-half-tablet is-one-third-widescreen is-one-quarter-fullhd"
                    v-for="item of filteredBenefits"
                    v-bind:key="item.title"
                >
                    <card
                        :title="item.title"
                        :description="item.description"
                        :key="item.title"
                        @dismissed="handleDismissedCard"
                    />
                </div>
            </transition-group>
            <transition name="fade" mode="out-in">
                <div
                    class="column is-6"
                    v-if="filteredBenefits.length === 0 || typeof filteredBenefits === 'undefined'"
                >
                    <div class="box">
                        <article class="media">
                            <div class="media-content">
                                <div class="content">
                                    <p class="is-size-5">
                                        No Benefits found for search term
                                        <strong>'{{searchTerm}}'</strong>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </transition>
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
    methods: {
        handleDismissedCard(cardTitle) {
            this.$store.dispatch('data/dismissCard', cardTitle);
        },
        checkForDismissedCard(cardTitle) {
            if (this.dismissedCardTitles) {
                this.dismissedCardTitles.forEach(title => {
                    if (cardTitle === title) {
                        return true;
                    }
                });
            }
            return false;
        },
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
.shuffle-cards-enter-active,
.shuffle-cards-leave-active {
    -webkit-transition: all 250ms ease;
    transition: all 250ms ease;
}

.shuffle-cards-enter,
.shuffle-cards-leave-to {
    opacity: 0;
}

.shuffle-cards-move {
    -webkit-transition: -webkit-transform 250ms;
    transition: -webkit-transform 250ms;
    transition: transform 250ms;
    transition: transform 250ms, -webkit-transform 250ms;
}
</style>

