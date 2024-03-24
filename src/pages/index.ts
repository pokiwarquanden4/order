import HeaderLayout from "../layout/Headerlayout/HeaderLayout";
import HeaderWithSearchLayout from "../layout/Headerlayout/HeaderWithSearchLayout";
import NoLayout from "../layout/Headerlayout/NoLayout";
import AccountDetails from "./AccountDetails/AccountDetails";
import AccountPages from "./AccountPages/AccountPages";
import CartPages from "./CartPages/CartPages";
import HomePage from "./HomePages/HomePages";

export const routes = {
    home: '/',
    cart: '/cart',
    account: '/account',
    accountDetails: '/account/details',
};

const publicRoutes = [
    { path: routes.home, component: HomePage, layout: HeaderWithSearchLayout },
    { path: routes.cart, component: CartPages, layout: NoLayout },
    { path: routes.account, component: AccountPages, layout: HeaderLayout },
    { path: routes.accountDetails, component: AccountDetails, layout: HeaderLayout },
]


export default publicRoutes