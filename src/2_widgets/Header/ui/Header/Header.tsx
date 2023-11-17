import React from "react";
import classNames from 'classnames';
import {Link} from "react-router-dom";
import grid from '5_shared/css/grid.module.scss';
import {Container} from "5_shared/ui/Container/Container";
import cls from './Header.module.scss';
import {Description} from "../Description/Description";
import {LanguageSwitcher} from "3_features/LanguageSwitcher";
import {Avatar} from "2_widgets/Header/ui/Avatar/Avatar";
import {Head} from "2_widgets/Header/ui/Head/Head";
import {Name} from "2_widgets/Header/ui/Name/Name";

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
                        <Head>
                            <Avatar
                                className={classNames(cls.avatar)}
                            />
                            <Name
                                className={classNames(cls.name)}
                            />
                            {/*<Link to={'/'}>Главная</Link>*/}
                            {/*<Link to={'/list/'}>Список</Link>*/}
                            <LanguageSwitcher />
                        </Head>
                    </div>
                    <div className={classNames(grid['grid__col-2'])}>
                        <Description />
                    </div>
                </div>
            </Container>
        </div>
    );
};
