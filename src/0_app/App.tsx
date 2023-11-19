import React, { Suspense, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { Footer } from '2_widgets/Footer';
import { Header } from '2_widgets/Header';
import { HeaderMode } from '2_widgets/Header/ui/Header/Header';
import { useLocation } from 'react-router-dom';
import { RoutePath } from '5_shared/config/router/routerConfig';
import { AppRouter } from './prodivers/router';
import cls from './App.module.scss';

function App() {
    const { theme } = useTheme();
    const location = useLocation();
    const [routeType, setRouteTypePage] = useState<boolean>(location.pathname === RoutePath.main);

    useEffect(() => {
        setRouteTypePage(location.pathname === RoutePath.main);
    }, [location]);

    // Раскомментировать, чтобы протестировать сообщение об ошибке
    // useEffect(() => {
    //     throw new Error();
    // }, []);

    return (
        <Suspense fallback="">
            <div className={classNames(cls.app, cls[`app--${theme}`])}>
                <Header
                    className={classNames(cls.header)}
                    mode={routeType ? HeaderMode.MAIN : HeaderMode.REGULAR}
                />
                <main className={classNames(cls.main)}>
                    <AppRouter />
                </main>
                <Footer
                    className={cls.footer}
                />
            </div>
        </Suspense>
    );
}

export default App;
