import React, { Suspense, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { useFetchMain } from '0_app/api/appApi';
import { Footer } from '2_widgets/Footer';
import { Header, HeaderMode } from '2_widgets/Header';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { RouterPath } from '5_shared/config/router/routerConfig';
import cls from './App.module.scss';
import { AppRouter } from './prodivers/router';

function App() {
    const { theme } = useTheme();
    const location = useLocation();
    const [routeType, setRouteTypePage] = useState<boolean>(location.pathname === RouterPath.main);

    const {
        data,
        isLoading,
    } = useFetchMain(null);

    useEffect(() => {
        setRouteTypePage(location.pathname === RouterPath.main);
    }, [location]);

    // Раскомментировать, чтобы протестировать сообщение об ошибке
    // useEffect(() => {
    //     throw new Error();
    // }, []);

    return (
        <Suspense fallback="">
            <div className={classNames(cls.app, cls[`app--${theme}`])}>
                <Header
                    data={data?.data}
                    className={classNames(cls.header)}
                    mode={routeType ? HeaderMode.MAIN : HeaderMode.REGULAR}
                />
                <AppRouter />
                <Footer
                    data={data?.data}
                    className={cls.footer}
                />
            </div>
        </Suspense>
    );
}

export default App;
