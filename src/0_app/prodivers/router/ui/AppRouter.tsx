import {Route, RouteProps, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import {routeConfig} from "5_shared/config/router/routerConfig";

interface AppRouterProps {
    className?: string
}

const AppRouter = (props: AppRouterProps) => {
    const { className } = props;

    return (
        <Suspense fallback={<div>Загрузка...</div>}>
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
};

export default AppRouter;
