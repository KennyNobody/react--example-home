import cls from './FrontPage.module.scss';
import Component from "../../component/Component";
import React from "react";

const FrontPage = () => {
    return (
        <div className={cls.page}>
            Front page
            <Component />
        </div>
    );
};

export default FrontPage;
