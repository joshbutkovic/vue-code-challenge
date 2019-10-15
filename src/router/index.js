import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Container/Welcome';
import Benefits from '@/components/Container/Benefits';
import Policies from '@/components/Container/Policies';
import Safety from '@/components/Container/Safety';

Vue.use(Router);

export default new Router({
    linkActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: 'Welcome',
            component: Welcome,
        },
        {
            path: '/benefits',
            name: 'Benefits',
            component: Benefits,
        },
        {
            path: '/policies',
            name: 'Policies',
            component: Policies,
        },
        {
            path: '/safety',
            name: 'Safety',
            component: Safety,
        },
    ],
});
