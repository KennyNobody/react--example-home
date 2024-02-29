import { RouteProps } from 'react-router-dom';
import { FrontPage } from '1_pages/FrontPage';
import { DetailPage } from '1_pages/DetailPage';
import { DevListPage } from '1_pages/DevListPage';
import { PostListPage } from '1_pages/PostListPage';
import { NotFoundPage } from '1_pages/NotFoundPage';
import { PhotoListPage } from '1_pages/PhotoListPage';
import { ContentKeyType } from '5_shared/types/CommonTypes';

export enum AppRouter {
    MAIN = 'main',
    DEV = 'dev',
    DEV_DETAIL = 'dev_detail',
    POSTS = 'posts',
    POST_DETAIL = 'post_detail',
    PHOTO = 'photo',
    PHOTO_DETAIL = 'photo_detail',
    NOT_FOUND = 'not_found',
}

export const RouterPath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.POSTS]: '/posts/',
    [AppRouter.POST_DETAIL]: '/posts/',
    [AppRouter.DEV]: '/dev/',
    [AppRouter.DEV_DETAIL]: '/dev/',
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
        element: <DetailPage mode={ContentKeyType.POST} />,
    },
    {
        path: RouterPath.dev,
        element: <DevListPage />,
    },
    {
        path: `${RouterPath.dev_detail}:slug`,
        element: <DetailPage mode={ContentKeyType.DEV} />,
    },
    {
        path: RouterPath.photo,
        element: <PhotoListPage />,
    },
    {
        path: `${RouterPath.photo_detail}:slug`,
        element: <DetailPage mode={ContentKeyType.PHOTO} />,
    },
    {
        path: RouterPath.not_found,
        element: <NotFoundPage />,
    },
];
