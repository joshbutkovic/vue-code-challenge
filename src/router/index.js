import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/views/HelloWorld';
import Benefits from '@/components/views/Benefits';
import Safety from '@/components/views/Safety';
import Policies from '@/components/views/Policies';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
        },
        {
            path: '/benefits',
            name: 'Benefits',
            component: Benefits,
        },
        {
            path: '/safety',
            name: 'Safety',
            component: Safety,
        },
        {
            path: '/policies',
            name: 'Policies',
            component: Policies,
        },
    ],
});
