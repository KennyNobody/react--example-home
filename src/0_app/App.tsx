import React from 'react';
import {Link} from 'react-router-dom';
import cls from './App.module.scss'
import classNames from "classnames";
import {useTheme} from "5_shared/libs/hooks/useTheme";
import {AppRouter} from "./prodivers/router";
import {Footer} from "2_widgets/Footer";

const App = () => {
    const { theme} = useTheme();

    return (
        <div className={classNames(cls.app, cls[`app--${theme}`])}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/list/'}>Список</Link>
            <main className={classNames(cls.main)}>
                <AppRouter/>
            </main>
            <Footer
                className={cls.footer}
            />
        </div>
    );
};

export default App;
