import { RouteProps } from 'react-router-dom';
import { FrontPage } from '1_pages/FrontPage';
import { PostsPage } from '1_pages/PostsPage';
import { NotFoundPage } from '1_pages/NotFoundPage';
import {PostsDetailsPage} from "1_pages/PostsDetailsPage";

export enum AppRouter {
    MAIN = 'main',
    POSTS = 'posts',
    POSTS_DETAIL = 'posts_detail',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.POSTS]: '/posts/',
    [AppRouter.POSTS_DETAIL]: '/posts/', // + slug
    [AppRouter.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <FrontPage />,
    },
    {
        path: RoutePath.posts,
        element: <PostsPage />,
    },
    {
        path: `${RoutePath.posts_detail}:slug`,
        element: <PostsDetailsPage />,
    },
    {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
];
