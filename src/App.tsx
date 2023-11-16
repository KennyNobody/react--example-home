import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {FrontPageAsync} from "./pages/FrontPage/FrontPage.async";
import {ListPageAsync} from "./pages/ListPage/ListPage.async";
import cls from './App.module.scss'
import classNames from "classnames";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames(cls.app, cls[`app--${theme}`])}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/list/'}>Список</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={'/'} element={<FrontPageAsync />}/>
                    <Route path={'/list/'} element={<ListPageAsync />} />
y                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
