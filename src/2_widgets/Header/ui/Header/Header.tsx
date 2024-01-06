import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '3_features/LanguageSwitcher';
import grid from '5_shared/css/grid.module.scss';
import { Container } from '5_shared/ui/Container';
import { Nav } from '../Nav/Nav';
import { Head } from '../Head/Head';
import { Name } from '../Name/Name';
import cls from './Header.module.scss';
import { Avatar } from '../Avatar/Avatar';
import { Description } from '../Description/Description';

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
