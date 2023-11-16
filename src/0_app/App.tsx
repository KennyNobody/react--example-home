import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {FrontPage} from "1_pages/FrontPage";
import {ListPage} from "1_pages/ListPage";
import cls from './App.module.scss'
import classNames from "classnames";
import {useTheme} from "5_shared/libs/hooks/useTheme";
import {AppRouter} from "./prodivers/router";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames(cls.app, cls[`app--${theme}`])}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/list/'}>Список</Link>
            <button onClick={toggleTheme}>
                Сменить тему
            </button>
            <AppRouter />
        </div>
    );
};

export default App;
