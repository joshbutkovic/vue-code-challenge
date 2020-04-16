import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Container/Welcome';
import Benefits from '@/components/Container/Benefits';
import Policies from '@/components/Container/Policies';
import Safety from '@/components/Container/Safety';

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [
        {
            path: '/vue-sample-app/',
            name: 'Welcome',
            component: Welcome,
        },
        {
            path: '/vue-sample-app/benefits',
            name: 'Benefits',
            component: Benefits,
        },
        {
            path: '/vue-sample-app/policies',
            name: 'Policies',
            component: Policies,
        },
        {
            path: '/vue-sample-app/safety',
            name: 'Safety',
            component: Safety,
        },
    ],
});
