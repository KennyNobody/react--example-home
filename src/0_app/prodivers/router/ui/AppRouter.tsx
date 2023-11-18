import React, { Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { LoaderPage } from '2_widgets/LoaderPage';
import { routeConfig } from '5_shared/config/router/routerConfig';

function AppRouter() {
    return (
        <Suspense fallback={<LoaderPage />}>
            <Routes>
                {
                    routeConfig.map((item: RouteProps) => (
                        <Route
                            key={item.path}
                            path={item.path}
                            element={item.element}
                        />
                    ))
                }
            </Routes>
        </Suspense>
    );
}

export default AppRouter;
