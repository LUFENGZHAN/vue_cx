import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const routes = [{
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/Cartt',
        name: 'Cart',
        component: () =>
            import ('../views/Cart/Cart.vue')
    },
    {
        path: '/Order',
        name: 'Order',
        component: () =>
            import ('../views/order/Order.vue')
    },
    {
        path: '/Login',
        name: 'Login',
        component: () =>
            import ('../views/login/Login.vue'),
            // beforeEnter(to, from, next) {
            //     const { isLogin } = localStorage;
            //     isLogin ? next({ name: "Home" }) : next();
            // }
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../views/register/Register.vue')
    },
    {
        path: '/shop/:id',
        name: 'Shop',
        component: () =>
            import ('../views/shop/Shop')
    },
    
    {
        path: '/orderConfirm/:id',
        name: 'OrderConfirm',
        component: () =>
            import ('../views/order/OrderConfirm')
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
// router.beforeEach((to, from, next) => {
//     const { isLogin } = localStorage;
//     const isLoginOrRegister = (to.name === 'Login' || to.name === 'Register');
//     (isLogin || isLoginOrRegister) ? next(): next({ name: "Login" });
// });

export default router