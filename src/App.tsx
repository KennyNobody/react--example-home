import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {FrontPageAsync} from "./pages/FrontPage/FrontPage.async";
import {ListPageAsync} from "./pages/ListPage/ListPage.async";

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>Главная</Link>
            <Link to={'/list/'}>Список</Link>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route path={'/'} element={<FrontPageAsync />}/>
y                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
