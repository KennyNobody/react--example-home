import { RouteProps } from 'react-router-dom';
import FrontPage from '1_pages/FrontPage/ui/FrontPage';
import { ListPage } from '1_pages/ListPage';
import { NotFoundPage } from '1_pages/NotFoundPage';

export enum AppRouter {
    MAIN = 'main',
    LIST = 'list',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.LIST]: '/list/',
    [AppRouter.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <FrontPage />,
    },
    {
        path: RoutePath.list,
        element: <ListPage />,
    },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];
