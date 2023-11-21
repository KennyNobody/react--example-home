import classNames from 'classnames';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import grid from '5_shared/css/grid.module.scss';
import { Container } from '5_shared/ui/Container/Container';
import { LanguageSwitcher } from '3_features/LanguageSwitcher';
import { Avatar } from '2_widgets/Header/ui/Avatar/Avatar';
import { Head } from '2_widgets/Header/ui/Head/Head';
import { Name } from '2_widgets/Header/ui/Name/Name';
import { Nav } from '../Nav/Nav';
import { Description } from '../Description/Description';
import cls from './Header.module.scss';

export enum HeaderMode {
    MAIN = 'main',
    REGULAR = 'regular',
}

interface HeaderProps {
    className?: string;
    mode: HeaderMode;
}

export function Header(props: HeaderProps) {
    const { className, mode } = props;

    return (
        <div
            data-testid="header"
            className={
                classNames(
                    cls.block,
                    cls[`block--${mode}`],
                    className,
                )
            }
        >
            <Container>
                <div className={classNames(grid.grid)}>
                    <div className={classNames(grid['grid__col-2'])}>
                        <Head
                            isMain={mode === HeaderMode.MAIN}
                        >
                            <Avatar
                                isMain={mode === HeaderMode.MAIN}
                                className={classNames(cls.avatar)}
                            />
                            <Name
                                isMain={mode === HeaderMode.MAIN}
                                className={
                                    classNames(
                                        cls.name,
                                        { [cls['name--main']]: mode !== HeaderMode.MAIN },
                                    )
                                }
                            />
                            <LanguageSwitcher />
                        </Head>
                    </div>
                    <div className={classNames(grid['grid__col-2'])}>
                        { mode === HeaderMode.MAIN && <Description />}
                        { mode === HeaderMode.REGULAR && <Nav />}
                        <Link to="/">Главная</Link>
                        <Link to="/list/">Список</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}
