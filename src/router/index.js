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
            path: '/vue-example-app/',
            name: 'Welcome',
            component: Welcome,
        },
        {
            path: '/vue-example-app/benefits',
            name: 'Benefits',
            component: Benefits,
        },
        {
            path: '/vue-example-app/policies',
            name: 'Policies',
            component: Policies,
        },
        {
            path: '/vue-example-app/safety',
            name: 'Safety',
            component: Safety,
        },
    ],
});
