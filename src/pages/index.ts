import HomePage from "./HomePages/HomePages";

export const routes = {
    home: '/',
    cart: '/cart',
    account: '/questions/:questionId/:responseId',
};

const publicRoutes = [
    { path: routes.home, component: HomePage },
]


export default publicRoutes