import React from "react";
import classNames from 'classnames';
import {Link} from "react-router-dom";
import grid from '5_shared/css/grid.module.scss';
import {Container} from "5_shared/ui/Container/Container";
import cls from './Header.module.scss';
import {Description} from "../Description/Description";

interface HeaderProps {
    className?: string
}

export const Header = (props: HeaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <Container>
                <div className={classNames(grid.grid)}>
                    <div className={classNames(grid['grid__col-2'])}>
                        <Link to={'/'}>Главная</Link>
                        <Link to={'/list/'}>Список</Link>
                    </div>
                    <div className={classNames(grid['grid__col-2'])}>
                        <Description />
                    </div>
                </div>
            </Container>
        </div>
    );
};
