import { RouteProps } from 'react-router-dom';
import { FrontPage } from '1_pages/FrontPage';
import { PostListPage } from '1_pages/PostListPage';
import { DetailPage } from '1_pages/DetailPage';
import { NotFoundPage } from '1_pages/NotFoundPage';

export enum AppRouter {
    MAIN = 'main',
    POSTS = 'posts',
    POST_DETAIL = 'post_detail',
    DEV = 'dev',
    DEV_DETAIL = 'dev_detail',
    PHOTO = 'photo',
    PHOTO_DETAIL = 'photo_detail',
    NOT_FOUND = 'not_found',
}

export const RouterPath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.POSTS]: '/posts/',
    [AppRouter.POST_DETAIL]: '/posts/',
    [AppRouter.DEV]: '/dev/',
    [AppRouter.DEV_DETAIL]: '/web/',
    [AppRouter.PHOTO]: '/photo/',
    [AppRouter.PHOTO_DETAIL]: '/photo/',
    [AppRouter.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
    {
        path: RouterPath.main,
        element: <FrontPage />,
    },
    {
        path: RouterPath.posts,
        element: <PostListPage />,
    },
    {
        path: `${RouterPath.post_detail}:slug`,
        element: <DetailPage />,
    },
    // {
    //     path: RouterPath.dev,
    //     element: <ListPage mode={ContentKeyType.DEV} />,
    // },
    {
        path: `${RouterPath.dev_detail}:slug`,
        element: <DetailPage />,
    },
    // {
    //     path: RouterPath.photo,
    //     element: <ListPage mode={ContentKeyType.PHOTO} />,
    // },
    {
        path: `${RouterPath.photo_detail}:slug`,
        element: <DetailPage />,
    },
    {
        path: RouterPath.not_found,
        element: <NotFoundPage />,
    },
];
