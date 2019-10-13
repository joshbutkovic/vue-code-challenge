import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/Container/HelloWorld';
import InfoCards from '@/components/Container/InfoCards';

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
            component: InfoCards,
            props: { cardType: 'benefits' },
        },
        {
            path: '/policies',
            name: 'Policies',
            component: InfoCards,
            props: { cardType: 'policies' },
        },
        {
            path: '/safety',
            name: 'Safety',
            component: InfoCards,
            props: { cardType: 'safety' },
        },
    ],
});
