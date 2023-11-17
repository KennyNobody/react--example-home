import React, { Suspense } from 'react';
import classNames from 'classnames';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { Footer } from '2_widgets/Footer';
import { Header } from '2_widgets/Header';
import { AppRouter } from './prodivers/router';
import cls from './App.module.scss';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames(cls.app, cls[`app--${theme}`])}>
            <Suspense fallback="">
                <Header
                    className={classNames(cls.header)}
                />
                <main className={classNames(cls.main)}>
                    <AppRouter />
                </main>
                <Footer
                    className={cls.footer}
                />
            </Suspense>
        </div>
    );
}

export default App;
