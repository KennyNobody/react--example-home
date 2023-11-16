import React, {Suspense} from "react";
import {Route, RouteProps, Routes} from "react-router-dom";
import {routeConfig} from "5_shared/config/router/routerConfig";
const AppRouter = () => {
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
