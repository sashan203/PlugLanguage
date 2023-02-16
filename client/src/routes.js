import Admin from "./pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOES, SHOP_ROUTE,ABOUT,HELPS} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Shoe from "./pages/Shoes";
import Help from "./pages/Helpers";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import About from "./pages/AboutPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: SHOES,
        Component: Shoe
    },
    {
        path: HELPS,
        Component: Help
    },
    {
        path: ABOUT,
        Component: About
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
]
