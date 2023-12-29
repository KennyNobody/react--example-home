import { RouteProps } from 'react-router-dom';
import { FrontPage } from '1_pages/FrontPage';
import { PostsPage } from '1_pages/PostsPage';
import { DetailPage } from '1_pages/DetailPage';
import { NotFoundPage } from '1_pages/NotFoundPage';

export enum AppRouter {
    MAIN = 'main',
    LIST = 'list',
    DETAIL = 'detail',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.LIST]: '/list/',
    [AppRouter.DETAIL]: '/list/',
    [AppRouter.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <FrontPage />,
    },
    {
        path: RoutePath.list,
        element: <PostsPage />,
    },
    {
        path: `${RoutePath.detail}:slug`,
        element: <DetailPage />,
    },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];
