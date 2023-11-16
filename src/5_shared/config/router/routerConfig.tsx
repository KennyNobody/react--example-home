import {RouteProps} from "react-router-dom";
import FrontPage from "1_pages/FrontPage/ui/FrontPage";
import {ListPage} from "1_pages/ListPage";

export enum AppRouter {
    MAIN = 'main',
    LIST = 'list',
}

export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.LIST]: '/list/'
}

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <FrontPage />
    },
    {
        path: RoutePath.list,
        element: <ListPage />
    }
]
